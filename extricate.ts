import { Command, EnumType } from "@cliffy/command";
type Results = {
  username: string;
  registry: string;
  password: string;
};
type Files = {
  keys: string;
  vault: string;
  cwdir: string;
};

async function decryptAndRetrieve(keyFile: string, dataFile: string, dirName: string): Promise<any[]> {
  // Read the key and IV from the file
  const keys = await Deno.readTextFile(`${dirName}/${keyFile}`);
  const data = await Deno.readTextFile(`${dirName}/${dataFile}`);
  const keyData = JSON.parse(keys);
  const key = Uint8Array.from(atob(keyData.key), (c) => c.charCodeAt(0));
  const iv = Uint8Array.from(atob(keyData.iv), (c) => c.charCodeAt(0));

  // Read the encrypted data
  const encryptedData = Uint8Array.from(
    atob(data),
    (c) => c.charCodeAt(0)
  );

  // Decrypt the data
  const decrypted = new Uint8Array(
    await crypto.subtle.decrypt(
      { name: "AES-CBC", iv },
      await crypto.subtle.importKey("raw", key, "AES-CBC", false, ["decrypt"]),
      encryptedData
    )
  );

  // Decode the decrypted data back to JSON
  const decoder = new TextDecoder();
  const resultsJSON = decoder.decode(decrypted);
  return JSON.parse(resultsJSON);
}

async function testPath(dir: string, file: string) {
  try {
    await Deno.stat(`${defaults.cwdir}/${defaults.keys}`);
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
    console.log("File is missing", `${dir}/${file}`);
  }
}
const defaults: Files = { keys: `.sha`, vault: `.enc`, cwdir: Deno.cwd() }
const command = new Command()
  .name("Extricate")
  .version("0.1.0")
  .globalOption("-d, --debug", "Enable debug output.")
  .description("Decrypt a result set using the same key and IV data, and provide it to standard out for piping to other commands.")
  // main command
  .action(() => console.log("Use -h for help."))
  // encrypt
  .command("decrypt", "Decrypt sub-command.")
  .action(async () => {
    await testPath(defaults.cwdir, defaults.keys);
    await testPath(defaults.cwdir, defaults.vault);
    const decryptedResults = await decryptAndRetrieve(defaults.keys, defaults.vault, defaults.cwdir);
    console.log(JSON.stringify(decryptedResults));
    }
  );

await command.parse(Deno.args);