// deno-lint-ignore-file prefer-const
import axios from 'npm:axios';

async function getAuth() {
    const execPath = Deno.cwd() + "/extricate"
    const command = new Deno.Command(execPath, {
        args: [
          "decrypt",
        ]
      });
    const { code, stdout } = await command.output();
    const decode = JSON.parse(await new TextDecoder().decode(stdout));
    return {
        username: decode[0].username,
        password: decode[0].password,
        email: '',
        serveraddress: decode[0].registry
    };
}

async function getDockerLocal() {
    const execPath = '/bin/bash'
    const command = new Deno.Command(execPath, {
        args: [
          "pkill",
          "-f",
          "'socat'",
          "&&",
          "socat",
          "TCP-LISTEN:2375,reuseaddr,fork",
          "UNIX-CONNECT:/var/run/docker.sock",
          "&"
        ]
      });
    const { code, stdout } = await command.output();
    const decode = await new TextDecoder().decode(stdout);
    return {
        code: code,
        stdout: decode
    };
}

async function runnerMckesson() {
  const execPath = '/bin/bash'
  const command = new Deno.Command(execPath, {
      args: [
        "pkill",
        "-f",
        "'/Users/lynseihogan/Documents/runner/mck/actions-runner/run.sh &'",
        "&&",
        "/Users/lynseihogan/Documents/runner/mck/actions-runner/run.sh",
        "&"
      ]
    });
  const { code, stdout } = await command.output();
  const decode = await new TextDecoder().decode(stdout);
  return {
      code: code,
      stdout: decode
  };
}


async function runnerLynsei() {
  const execPath = '/bin/bash'
  const command = new Deno.Command(execPath, {
      args: [
        "pkill",
        "-f",
        "'/Users/lynseihogan/Documents/runner/lyns/actions-runner/run.sh &'",
        "&&",
        "/Users/lynseihogan/Documents/runner/lyns/actions-runner/run.sh &",
        "&"
      ]
    });
  const { code, stdout } = await command.output();
  const decode = await new TextDecoder().decode(stdout);
  return {
      code: code,
      stdout: decode
  };
}


async function containerList() {
    const dockerApiUrl = 'http://localhost:2375/'; // Replace with your Docker daemon URL

    async function listContainers() {
    try {
        const response = await axios.get(`${dockerApiUrl}/containers/json`);
        const containers = response.data;
        containers.forEach((item: { [x: string]: any; }) => {
          for(let key in item) {
              console.log(`${key}: ${item[key]}`);
          }
       });


    } catch (error) {
        console.error('Error:', error);
    }
    }

    listContainers();
}

async function attachToContainer(containerId: string) {
  const execPath = '/bin/bash'
  const command = new Deno.Command(execPath, {
      args: [
        "docker",
        "exec",
        "--rm",
        "-it",
        containerId,
        "fish"
      ]
    });
  const { code, stdout } = await command.output();
  const decode = await new TextDecoder().decode(stdout);
  return {
      code: code,
      stdout: decode
  };
}

await getDockerLocal();
await containerList();
await runnerMckesson();
await runnerLynsei();
// 1b81c4ca4b19be47cb796d831e45027528ecaf979440849a8876289ab70b851e
// 724db2fb63d985322f09e9759e13fb0c3d86b40aeb8a90a02ebcd3961ac219e9
// ba659019855f5200b0e91a2e8c83966c216675f3e6624815f2c3500fddf70989
await attachToContainer("1b81c4ca4b19be47cb796d831e45027528ecaf979440849a8876289ab70b851e");

