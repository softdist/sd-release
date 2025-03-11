import { Runner } from "./lib/runner.ts"
import { white, bgRed } from "jsr:@std/fmt@~1.0.2/colors";
import os from 'node:os';

const log = console.log;
const cwd = Deno.cwd();
const homedir = os.homedir() + '/.config/.devops';

try {
    await Deno.lstat(`${homedir}/.config.location`);
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
    log(bgRed(`Missing Configuration [Files] | This is normal for first time users.`))
    log(white(`Please run 'sd-install' to create a configuration file.`))
  }
// instantiate
const run = await new Runner(
    [
        ['default_org', 'lynsei'],
        ['default_parent', 'run.parent'],
        ['default_child', 'run.child'],
        ['default_socket', '/var/run/docker.sock'],
        ['default_dir', `${homedir}`],
        ['default_cwd', `${cwd}`],
        ['default_location', await Deno.readTextFile( `${homedir}/.config.location` )]
    ]
);

// process commands
await run.main();
