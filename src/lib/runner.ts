import { Command as CliffyCommand } from "jsr:@cliffy/command@^1.0.0-rc.7";
import { encodeBase64 } from 'jsr:@std/encoding@^0.224.3';
import { md5 } from "jsr:@takker/md5";
import { bgRed, bgBrightCyan, bgGreen, red, blue, gray, green, bgBrightYellow, bgBlue } from "jsr:@std/fmt@~1.0.2/colors";
import replace from "npm:@stdlib/string-replace"
import type { TimeStampDetails, ImageCreateResponse, ImageCreateData, ContainerCreateData } from "./types.ts";
import type { HostConfig, ContainerExecData, ContainerLogsResponse, ContainerStartResponse, ContainerStartData, ContainerLogsData } from "./types.ts";
import Docker, { RegistryAuthentication } from "../docker/mod.ts"
import { _DockerClient } from './client.ts';
import { DockerResponse } from './connection.ts';
import { AsyncLock } from "@olli/async-lock";
import os from 'node:os';

// primary
const log = console.log;

export async function getAuth() {
    const execPath = Deno.cwd() + "/sd-extricate"
    const command = new Deno.Command(execPath, {
        args: [
          "decrypt",
        ]
      });
    const { stdout } = await command.output();
    const decode = JSON.parse(await new TextDecoder().decode(stdout));
    return {
        username: decode[0].username,
        password: decode[0].password,
        email: '',
        serveraddress: decode[0].registry
    };
}

export class Runner {
    private os: Map<string, string>;
    private sys: Map<string, string>;
    private time : TimeStampDetails;
    private timeString: string;
    private md5hash: string;
    public static getPlatform() {
      return {
          deno: Deno.version.deno as string,
          v8: Deno.version.v8 as string,
          ts: Deno.version.typescript as string,
          os: os.arch() as string,
          mem: os.freemem().toString(),
          host: os.hostname() as string,
          home: os.homedir() as string,
          sys: os.platform() as string,
          tmp: os.tmpdir() as string,
          shell: os.userInfo().shell as string,
          user: os.userInfo().username as string,
          mach: os.machine() as string
      };
    }
    private async client2(): Promise<_DockerClient> {
        const auth = await this.auth();
        return new _DockerClient(this.sys.get('default_socket') as string, auth);
    }
    private async client1(): Promise<Docker> {
        const auth = await this.auth();
        return new Docker(this.sys.get('default_socket') as string, auth);
    }
    private async auth(): Promise<RegistryAuthentication> {
        return await getAuth();
    }

    constructor(initialValues: [string, string][]) {

      // init
      this.sys = new Map(initialValues);
      this.os = new Map(Object.entries(Runner.getPlatform()));

      this.os.forEach((value, key) => {
        this.sys.set(key, value); // merge os into system
      });

      //log(this.sys.keys(), this.sys.values())

      this.timeString = new Date().toString();
      this.md5hash = encodeBase64(md5(this.timeString));
      this.time = {
        plain: this.timeString,
        base64: replace(this.md5hash, /[/=+!@#$%^&*]/gi, '')
      };

    }

    // Getter to access the map (optional)
    get map(): Map<string, string> {
        return this.sys;
    }

    // Methods to interact with the map
    public getValue(key: string): string | undefined {
        return this.sys.get(key);
    }

    public setValue(key: string, value: string): void {
        this.sys.set(key, value);
    }
    private async containerStart(data: ContainerStartData): Promise<DockerResponse<ContainerStartResponse>> {
       const client = await this.client2();
       return client.request({
            method: 'POST',
            url: `/containers/${data.id}/start`,
            path: {
                id: data.id
            },
            query: {
                detachKeys: data.detachKeys
            },
            errors: {
                304: 'container already started',
                404: 'no such container',
                500: 'server error'
            }
        });
    }

    private async containerLogs(data: ContainerLogsData): Promise<DockerResponse<ContainerLogsResponse>> {
        const client = await this.client2();
        return client.request({
            method: 'GET',
            url: `/containers/${data.id}/logs`,
            path: {
                id: data.id
            },
            query: {
                follow: data.follow,
                stdout: data.stdout,
                stderr: data.stderr,
                since: data.since,
                until: data.until,
                timestamps: data.timestamps,
                tail: data.tail
            },
            errors: {
                404: 'no such container',
                500: 'server error'
            }
        })
    }

    private async imageCreate(data: ImageCreateData = {}): Promise<DockerResponse<ImageCreateResponse>> {
        const client = await this.client2();
        return client.request({
            method: 'POST',
            url: '/images/create',
            headers: {
                'X-Registry-Auth': data.xRegistryAuth
            },
            query: {
                fromImage: data.fromImage,
                fromSrc: data.fromSrc,
                repo: data.repo,
                tag: data.tag,
                message: data.message,
                changes: data.changes,
                platform: data.platform
            },
            body: data.inputImage,
            errors: {
                404: 'repository does not exist or no read access',
                500: 'server error'
            }
        });
    }

    private async containerAttachment(containerId: string) {
        try {
            log(bgBlue(`🔗 Attaching to container: ${containerId}`));

            // Check if already attached to avoid duplicate locks
            if (this.isAttached) {
                log(yellow(`⚠️ Already attached to container: ${containerId}`));
                return;
            }
            this.isAttached = true; // Set flag to prevent duplicate attach calls

            // Connect to Docker socket
            const socket = await Deno.connect({
                transport: "unix",
                path: "/var/run/docker.sock"
            });

            // Send the attach request
            const attachRequest =
                `POST /containers/${containerId}/attach?stream=1&stdin=1&stdout=1&stderr=1 HTTP/1.1\r\n` +
                `Host: localhost\r\n` +
                `Connection: Upgrade\r\n` +
                `Upgrade: tcp\r\n\r\n`;

            await socket.write(new TextEncoder().encode(attachRequest));

            // Wait for Docker to upgrade connection
            const reader = socket.readable.getReader();
            let response = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                response += new TextDecoder().decode(value);
                if (response.includes("HTTP/1.1 101 UPGRADED")) break;
            }

            log(green(`✅ Attached successfully to container: ${containerId}`));
            (async () => {
                const stdoutWriter = Deno.stdout.writable.getWriter();
                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        await stdoutWriter.write(value);
                    }
                 } catch (_error) {
                    return stdoutWriter.releaseLock();
                 }
            })();

            // **Stream user input to container (stdin)**
            (async () => {
                const stdinReader = Deno.stdin.readable;
                try {
                    await stdinReader.pipeTo(socket.writable);
                 } catch (_error) {
                    return stdinReader.getReader().releaseLock();
                 }
            })();
            // **Keep the process open**
            // await new Promise(() => {});



        } catch (error) {
            log(red(`❌ Attach Error: ${error}`));
        }
    }

    private async containerAttach(containerId: string, cmd: string) {
        await new Command("docker", ["exec", "-it", containerId, cmd]).run();
    }

    private async checkContainerStatus(containerId: string) {
        const client = await this.client2();
        const containerInfo = await client.request({
            method: 'GET',
            url: `/containers/${containerId}/json`,
        });

        if (!containerInfo.body) {
            throw new Error(`Container ${containerId} is not running.`);
        }
    }

    // private async containerTryStart(id: string) {
    //     try {
    //         const start = await this.containerStart({
    //         id: `${id}`
    //         });
    //         return start
    //     } catch (error) {
    //         log(red("Error:" + error));
    //     }
    // }
    private async apiContainerExec(data: ContainerExecData): Promise<DockerResponse<ContainerExecData>> {
        const client = await this.client2();
        return client.request({
            method: 'POST',
            url: '/containers/{data.id}/exec',
            path: {
                id: data.id
            },
            body: data.execConfig,
            errors: {
                404: 'no such container',
                409: 'container is paused',
                500: 'Server error'
            }
        });
    }

    private async containerStartNow(containerId: string) {
        const start = await this.containerStart({
            id: `${containerId}`
          });
          log(blue(`Started: ${containerId}`));
          return start
    }

    private async execCreate(containerId: string, cmd: string[]) {
       const execCreate = await this.apiContainerExec({
            id: containerId,
            execConfig: {
                AttachStdout: true,
                AttachStderr: true,
                Tty: true,
                Cmd: cmd
            }
        })
        log(red(`Exec Create ;`))
        console.log(execCreate);
        return execCreate.body?.id as string
    }

    private async execStart(containerId: string, cmd: string[]) {
        const client = await this.client1();
        const execConfig = await client.exec.execStart({
            id: containerId,
            execStartConfig: {
                Detach: false
            }
        })
        console.log(execConfig.body)
        //await this.execCreate(containerId, cmd);
    }

    private async task4() {

    }

    private async createContainer( image: string, tag: string, platform: string, dir: string, name: string, cmd: string[] ) {
        try {
            const sock = this.sys.get('default_socket');
            const loc = this.sys.get('default_location');

            // log things
            log(bgBrightCyan(`User Commands: ${cmd}`));
            log(green(`Container Name: ${name}`))
            log(gray(`Socket: ${sock}`));
            log(blue(`Config Location: ${loc}`))

            // Start the container
            const hostConfig: HostConfig = {
                  //VolumesFrom, MaskedPaths, Links, Sysctls, Isolation, MaskedPaths, ReadonlyPaths, PortBindings, LogConfig
                AutoRemove: true,
                LogConfig: {
                  Type: 'json-file'
                },
                Tmpfs: {
                  "/secrets": "rw,noexec,nosuid,size=64m"
                },
                Privileged: true,
                Init: true,
                Binds: [
                    `${dir}/.cache.parent:/root/.cache.parent`,
                    `${dir}/.cache.child:/root/.cache.child`,
                    `${dir}/.sha:/root/.sha`,
                    `${dir}/.enc:/root/.enc`,
                    `${loc}:/root/.config.yaml`
                ]
            }
            // const endpointSettings: EndpointSettings = {
            //     NetworkID: 'lynsei'
            // }
            // const networkConfig: NetworkingConfig = {
            //     EndpointsConfig:  {
            //         lynsei: endpointSettings
            //     }
            // }
            const containerCreateData : ContainerCreateData = {
                body: {
                    Image: `${image}:${tag}`,
                    User: "root",
                    AttachStdin: true,
                    AttachStdout: true,
                    AttachStderr: true,
                    OpenStdin: true,
                    StdinOnce: false,
                    Tty: true,
                    Labels: {
                        'com.container.author': 'lynsei'
                    },
                    Env: [
                        `__platform=${platform}`,
                        `__config=/root/.config.yaml`
                    ],
                    HostConfig: hostConfig
                },
                name: name,
                platform: platform
            };
            log(bgRed(platform));
            const client = await this.client1();
            const cont = await client.containers.containerCreate(containerCreateData);
            const body = cont.body;
            const containerId = `${body?.Id}`;

            const lock = new AsyncLock();

            return await Promise.all([
                lock.run(() => this.containerStartNow(containerId)),
                lock.run(() => this.containerAttachment(containerId))
              ]);


        } catch (error) {
            log(red("Docker Error:" + error));
        }
    }

    private async pullImage( image: string, tag: string, platform: string ) {
        // get image
        log(`Pulling image: ${image}:${tag} (${platform})...`);

        await this.imageCreate({
            fromImage: image,
            tag: tag,
            platform: platform
        });

        log(green(`Docker Pulled: ${image}:${tag}`));
    }

    private async testDocker() {
        // initialize

        // const options: Deno.ConnectOptions = {
        //     hostname: "127.0.0.1",
        //     port: 2375,
        //     transport: "tcp",
        //   };
        // const conn = await Deno.connect(options);


        // 1. Check Docker daemon
        const client = await this.client1();
        const versionInfo = await client.system.systemVersion();
        if (versionInfo.headers?.get("Server") !== null) {
            log(blue("Docker Version Info:" + versionInfo.headers?.get("Server")));
        }
    }

    public async main() {

    const { default_org, default_child, default_dir } = {
        default_org: this.sys.get("default_org"),
        default_child: this.sys.get("default_child"),
        default_dir: this.sys.get("default_dir")
    };

    const { sys, home, shell, user, host, mem, mach } =  {
        sys: this.sys.get('sys'),
        home: this.sys.get('home'),
        shell: this.sys.get('shell'),
        user: this.sys.get('user'),
        host: this.sys.get('host'),
        mem: this.sys.get('mem'),
        mach: this.sys.get('mach')
    }

    const childCommand = await new CliffyCommand()
    .name("child")
    .description("Run a child command with arguments after --")
    .option("-n, --name <name:string>", "Specify a container name", {
        default: `${this.time.base64}`
    })
    .option("-i, --image <image:string>", "Specify a repo/image", {
        default: `fish`
    })
    .option("-t, --tag <tag:string>", "Specify a tag", {
        default: `${mach}`
    })
    .option("-p, --platform <platform:string>", "Specify a platform", {
        default: `linux/${mach}`
    })
    .action(async ({ name, image, tag, platform }) => {
        // get all args after --
        const index = Deno.args.indexOf("--");
        const cmd = index !== -1 ? Deno.args.slice(index + 1) : [];
        //const cmds = cmd.join(" ");

        // system info
        log(gray(`Date: ${this.time.plain}`));
        //log(gray(this.time.base64));

        log(bgGreen(`System: ${sys} Home: ${home} Shell: ${shell} User: ${user} Platform: ${host} Memory: ${mem} Arch: ${mach}`));
        // start container
        await this.createContainer(
        `${default_org}/${default_child}.${image}`,
        `${tag}`,
        `${platform}`,
        `${default_dir}`,
        `${name}`,
        cmd );
    })

    await new CliffyCommand()
    .name("Static Docker Client")
    .version(await Deno.readTextFile('./.semver.version.tag'))
    .globalOption("-d, --debug", "Enable debug output.")
    .description("Decrypt a result set using the same key and IV data, and provide it to standard out for piping to other commands.")
    // main command
    .action(() => console.log("Use -h for help."))
    // sub: image
    .command("image", "Run an image")
    .option("-n, --name <name:string>", "Specify a image name", {
        default: `${default_org}/run.parent`
    })
    .option("-t, --tag <tag:string>", "Specify a tag name", {
        default: `${mach}`
    })
    .action(async ({ name, tag }) => {
        // run a child container
        try {
            log(bgGreen(this.time.plain));
            await this.pullImage(`${name}`, `${tag}`, `linux/${mach}`);
        } catch (error) {
            console.error("Error:", error);
        }
      }
    )
    // sub: child
    .command("child", childCommand)
    // sub: child
    .command("test", "Test the docker daemon")
    .action(async () => {
        // run a child container
        try {
            log(gray(JSON.stringify(mach)));
            log(bgBrightYellow(this.time.plain));
            log(bgGreen(`System: ${sys} Home: ${home} Shell: ${shell} User: ${user} Platform: ${host} Memory: ${mem}} Arch: ${mach}`));
            await this.testDocker();
        } catch (error) {
            console.error("Error:", error);
        }
      }
    )
    .parse(Deno.args);
  }
}
