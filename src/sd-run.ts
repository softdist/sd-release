import { Runner } from "./lib/runner.ts"
import { red, bgRed } from "jsr:@std/fmt@~1.0.2/colors";
const log = console.log;
const cwd = Deno.cwd();
try {
    await Deno.lstat(`${cwd}/.config.location`);
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
    log(bgRed(`Configuration Error`))
    log(red(`You need to run 'sd-install' in the same container path before running this program.`))
  }
// instantiate
const run = await new Runner(
    [
        ['default_org', 'lynsei'],
        ['default_parent', 'run.parent'],
        ['default_child', 'run.child'],
        ['default_socket', '/var/run/docker.sock'],
        ['default_dir', `${cwd}`],
        ['default_location', await Deno.readTextFile( `${cwd}/.config.location` )]
    ]
);

// process commands
await run.main();
