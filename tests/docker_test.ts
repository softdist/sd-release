import { assertEquals, assertRejects } from "jsr:@std/assert"
import { containerStart, containerLogs, imageCreate } from "../run.ts";

// Mock Docker API Client
class MockDockerClient {
    async request(options: any) {
        if (options.url.includes("/containers/")) {
            return { body: { Id: "mock-container-id" } };
        }
        throw new Error("API Error");
    }
}

Deno.test("containerStart should send a request to start a container", async () => {
    const response = await containerStart({ id: "mock-container" });
    assertEquals(response.body.Id, "mock-container-id");
});

Deno.test("containerLogs should throw an error when API fails", async () => {
    await assertRejects(
        async () => await containerLogs({ id: "invalid-container" }),
        Error,
        "API Error"
    );
});
