import { test, expect, runTests } from "@rbxts/rbxts-jest";

test("add", () => {
    const result = 2 + 2;
    expect(result).toBe(4);
});


runTests();