import { MinLength, Required, EmailAddress, MatchesProperty, createDecorator } from "../../src/main";
import { IsAnAdult } from "./custom-decorators";

export class Example {
    
    @Required
    @MinLength(3)
    givenName: string;

    @Required
    @MinLength(3)
    familyName: number;

    @IsAnAdult
    age: number;

    @Required
    @EmailAddress
    emailAddress: string;

    @Required
    @EmailAddress
    @MatchesProperty("emailAddress")
    confirmEmailAddress: string;
}
