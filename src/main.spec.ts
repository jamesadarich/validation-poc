import { Expect, Test, TestFixture } from "alsatian";

@TestFixture("example test fixture")
export class ExampleTestFixture {

    @Test("doesn't throw an error")
    public noError() {
        Expect(() => require("./main")).not.toThrow();
    }
}
