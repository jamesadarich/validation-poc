import "reflect-metadata";
import { isValid } from "./validation/is-valid";
import { messagesFor } from "./validation/messages-for";
import { MinLength } from "./decorators/min-length";
import { Required } from "./decorators/required";
import { Matches } from "./decorators/matches";
import { EmailAddress } from "./decorators/email-address";

export {
    isValid,
    messagesFor,
    Required,
    MinLength,
    Matches,
    EmailAddress
}
