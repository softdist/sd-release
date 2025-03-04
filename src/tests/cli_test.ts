import { assertEquals } from "jsr:@std/assert@^0.224.3";
import { CliffyCommand } from "@cliffy/command";
import { Runner } from "../lib/runner.ts"; // Import the CLI script

Deno.test("CLI should display help when no arguments are passed", async () => {
    const cmd = new CliffyCommand()
        .name("Runner")
        .version("0.1.4")
        .description("CLI for managing Docker containers");

    const { output } = await cmd.parse([]);
    assertEquals(output, "Use -h for help.");
});

Deno.test("CLI should parse child command arguments", async () => {
    const args = ["child", "--name", "test-container", "--image", "nginx", "--tag", "latest", "--", "echo", "hello"];
    const { options } = await new CliffyCommand().parse(args);

    assertEquals(options.name, "test-container");
    assertEquals(options.image, "nginx");
    assertEquals(options.tag, "latest");
});
