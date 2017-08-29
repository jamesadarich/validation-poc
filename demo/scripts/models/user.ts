import { MinLength, Required, EmailAddress, MatchesProperty } from "../../../src/main";
import { IsAnAdult } from "../custom-decorators";
import { Address } from "./address";
import { Type } from "class-transformer";

export class User {
    
    @Required
    @MinLength(3)
    givenName: string;

    @Required
    @MinLength(3)
    familyName: number;

/*    @Required
    @IsAnAdult
    age: number;*/

    @Required
    @EmailAddress
    emailAddress: string;

    @Required
    @EmailAddress
    @MatchesProperty("emailAddress")
    confirmEmailAddress: string;

/*    @Required
    @Type(() => Address)
    address: Address;*/
}
