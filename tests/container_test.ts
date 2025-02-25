import { assertEquals, assertRejects } from "jsr:@std/assert@^0.224.3";
import { createContainer, containerTryStart } from "../script.ts";

Deno.test("createContainer should return a valid container ID", async () => {
    const mockId = await createContainer("nginx", "latest", "linux/amd64", "/tmp", "test-container", ["echo", "hello"]);
    assertEquals(mockId, "mock-container-id");
});

Deno.test("containerTryStart should catch and log errors", async () => {
    await assertRejects(
        async () => await containerTryStart("invalid-container"),
        Error
    );
});
