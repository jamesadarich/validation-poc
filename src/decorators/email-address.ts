import { MatchesRegex } from "./matches-regex";
import { IDecorator } from "./decorator-builder";

const EmailAddress = MatchesRegex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                        .withMessage("must be a valid email");

export {
    EmailAddress
}
