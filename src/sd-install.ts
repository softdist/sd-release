import { Input, Toggle, Select, Secret, prompt } from "@cliffy/prompt";
import os from 'node:os';
import { generatedVersion } from "./version.ts";

type Results = {
    username: string;
    registry: string;
    password: string;
};

async function encryptAndSave(results: Results[], keyFile: string, dataFile: string, dirName: string) {
  // Generate a random 256-bit (32 bytes) key and IV
  const key = crypto.getRandomValues(new Uint8Array(32)); // AES-256
  const iv = crypto.getRandomValues(new Uint8Array(16)); // AES block size

  // Convert results to JSON string
  const resultsJSON = JSON.stringify(results);
  const encoder = new TextEncoder();
  const encodedResults = encoder.encode(resultsJSON);

  // Encrypt the JSON data
  const cipherText = new Uint8Array(
    await crypto.subtle.encrypt(
      { name: "AES-CBC", iv },
      await crypto.subtle.importKey("raw", key, "AES-CBC", false, ["encrypt"]),
      encodedResults
    )
  );

  // Save the key and IV as a base64 encoded JSON
  const keyData = {
    key: btoa(String.fromCharCode(...key)),
    iv: btoa(String.fromCharCode(...iv)),
  };

  await Deno.writeTextFile(`${dirName}/${keyFile}`, JSON.stringify(keyData));
  await Deno.writeTextFile(`${dirName}/${dataFile}`, btoa(String.fromCharCode(...cipherText)));

  console.log("Data encrypted and saved successfully.");
}


async function main() {
const homeDir = os.homedir() + '/.config/.devops'
const dirName = Deno.cwd();
const multiLineYaml = `secrets:
  storage:
    command:
      - "gh auth token"
    files:
      - "/secrets/.tokens/secrets.sh"
mounts:
  bind:
    - "$PWD/.cache:/root/devops"
    - "$PWD/.config:/root/.config"
tokens:
  az:
    - "as9fweh390f8h02hbf08y2343oi8bnf0823i8hf"
  jfrog:
    - "da80uh30efhewh3208inee802hnf324i8fya9na"
  github:
    - "fa60uh80efhewh3208inee802hnf324i8fya9Yx"
globals:
  az:
    - "az"
    - "AZURE_TOKEN"
  jfrog:
    - "jfrog"
    - "JFROG_TOKEN"
  github:
    - "github"
    - "GITHUB_TOKEN"
`;
const multiLineIntro = `

    ▗▄▄▖ ▗▄▖ ▗▄▄▄▖▗▄▄▄▖    ▗▄▄▄ ▗▄▄▄▖ ▗▄▄▖▗▄▄▄▖
    ▐▌   ▐▌ ▐▌▐▌     █      ▐▌  █  █  ▐▌     █
     ▝▀▚▖▐▌ ▐▌▐▛▀▀▘  █      ▐▌  █  █   ▝▀▚▖  █
    ▗▄▄▞▘▝▚▄▞▘▐▌     █      ▐▙▄▄▀▗▄█▄▖▗▄▄▞▘  █

      a Runtime Client for Docker Containers
             ${generatedVersion}


`;


console.log(multiLineIntro);
const result = await prompt([{
        name: "example",
        message: "Create a default config.yaml?",
        type: Toggle,
        after: async ({ example }, next) => { // executed after like prompt
            if (example) {
              await next("location");
            } else {
              await next("credentials");
            }
        }
    }, {
        name: "location",
        message: "File location:",
        type: Select,
        options: [
          { name: "Default", value: dirName },
          { name: "Other", value: "other" }
        ],
        after: async ({ location }, next) => { // executed after like prompt
            if (location == dirName) {
               // write the default file
              await next("credentials");
            } else {
              await next("specifyloc");
            }
          }
    }, {
        name: "specifyloc",
        message: `Specify a location:`,
        minLength: 8,
        type: Input,
        default: "test",
        after: async ({ specifyloc }, next) => { // executed after like prompt
            if (specifyloc) {
               // write the location
              await Deno.writeTextFile(`${homeDir}/config.location`, specifyloc );
              await next("credentials");
            } else {
              console.log( "You must specify a file location" )
              await next("specifyloc");  // again
            }
        }
    }, {
        name: "credentials",
        message: "Store Docker Credentials?",
        type: Toggle,
        before: async ({ specifyloc }, next) => { // executed after like prompt
            if (specifyloc) {
              // write config yaml to specific location
              await Deno.writeTextFile(`${specifyloc}/.config.location`, `${specifyloc}/.config.yaml` );
              await Deno.writeTextFile(`${specifyloc}/.config.yaml`, multiLineYaml);
              await next();
            } else {
              // write config yaml to default location
              await Deno.writeTextFile(`${homeDir}/.config.location`, `${homeDir}/.config.yaml` );
              await Deno.writeTextFile(`${homeDir}/.config.yaml`, multiLineYaml);
              await next();
            }
        },
        after: async ({ credentials }, next) => { // executed after like prompt
            if (credentials) {
              await next("registry");
            } else {
                 // no more prompts
            }
        }
    }, {
        name: "registry",
        message: `Docker Registry URL`,
        minLength: 5,
        type: Input,
        default: "docker.io",
        after: async ({ registry }, next) => { // executed after like prompt
            if (registry) {
              await next("username");
            } else {
              console.log( "You must specify a docker registry URL." )
              await next("registry");  // again
            }
        }
    }, {
        name: "username",
        message: `Registry User`,
        minLength: 3,
        type: Input,
        after: async ({ username }, next) => { // executed after like prompt
            if (username) {
                await next("password");
            } else {
                console.log( "You must specify a registry username." )
                await next("username");  // again
            }
        }
    }, {
        name: "password",
        message: `Registry Password`,
        minLength: 8,
        type: Secret,
        after: async ({ password }, next) => { // executed after like prompt
            if (password) {
                // no more prompts
            } else {
                console.log( "You must specify a registry username." )
                await next("password");  // again
            }
        }
    }
]);
const row: Results = {
  username: result.username!,
  registry: result.registry!,
  password: result.password!
};
await encryptAndSave([row], ".sha", ".enc", homeDir);
//console.log({ result })
}

main();
