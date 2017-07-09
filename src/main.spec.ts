import { Expect, Test, TestFixture } from "alsatian";

@TestFixture("main export")
export class MainExportTests {

    @Test("doesn't throw an error")
    public noError() {
        Expect(() => require("./main")).not.toThrow();
    }

    @Test("conatins all expected keys")
    public allExpectedKeys() {
        const expectedKeys = [
            "isValid",
            "messagesFor",
            "Required",
            "IValidationDecorator",
            "createDecorator",
            "MinLength",
            "MatchesProperty",
            "MatchesRegex",
            "EmailAddress"
        ];

        const mainExportKeys = Object.keys(require("./main"));

        expectedKeys.forEach(key => Expect(mainExportKeys).toContain(key));

        Expect(mainExportKeys.length).toBe(expectedKeys.length);
    }
}
