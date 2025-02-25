import { assertEquals } from "jsr:@std/assert";
import { getPlatform, getAuth } from "../run.ts";

// Mock System Environment
Deno.env.set("DENO_VERSION", "1.40.0");
Deno.env.set("V8_VERSION", "9.9");

Deno.test("getPlatform should return system information", () => {
    const platform = getPlatform();
    assertEquals(platform.deno, "1.40.0");
    assertEquals(platform.v8, "9.9");
});

Deno.test("getAuth should return authentication credentials", async () => {
    // Mock `Deno.Command` output
    const execPath = "/fake/path/extricate";
    const command = new Deno.Command(execPath, {
        args: ["decrypt"],
    });

    const mockAuth = {
        username: "test-user",
        password: "test-pass",
        serveraddress: "test-registry",
    };

    Deno.env.set("MOCK_AUTH", JSON.stringify(mockAuth));

    const auth = await getAuth();
    assertEquals(auth.username, "test-user");
});
