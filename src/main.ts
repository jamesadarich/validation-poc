import "reflect-metadata";
import { isValid } from "./validation/is-valid";
import { messagesFor } from "./validation/messages-for";
import { MinLength } from "./decorators/min-length";
import { Required } from "./decorators/required";
import { MatchesProperty } from "./decorators/matches-property";
import { IValidationDecorator } from "./decorators/decorator-builder";
import { MatchesRegex } from "./decorators/matches-regex";
import { EmailAddress } from "./decorators/email-address";

export {
    isValid,
    messagesFor,
    Required,
    IValidationDecorator,
    MinLength,
    MatchesProperty,
    MatchesRegex,
    EmailAddress
}
