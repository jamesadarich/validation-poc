import { MinLength, Required } from "../../src/main";

export class Example {
    
    @Required
    @MinLength(3)
    givenName: string;

    @Required
    @MinLength(3)
    familyName: string;
}