import { AsyncTest, Expect, Test, TestFixture } from "alsatian";

@TestFixture("main export")
export class MainExportTests {

    @AsyncTest("doesn't throw an error")
    public async noError() {
        Expect(async () => await import("../src/main")).not.toThrow();
    }

    @AsyncTest("conatins all expected keys")
    public async allExpectedKeys() {
        const expectedKeys = [
            "isValid",
            "validate",
            "Required",
            "createDecorator",
            "MinLength",
            "MatchesProperty",
            "MatchesRegex",
            "EmailAddress",
            "watchValidationIssues",
            "EmailAddress"
        ];

        const mainExportKeys = Object.keys(await import("../src/main"));

        expectedKeys.forEach(key => Expect(mainExportKeys).toContain(key));

        Expect(mainExportKeys.length).toBe(expectedKeys.length);
    }
}
