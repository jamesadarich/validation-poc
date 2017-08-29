import "reflect-metadata";
import { isValid } from "./validation/is-valid";
import { validate } from "./validation/validate";
import { MinLength } from "./decorators/min-length";
import { Required } from "./decorators/required";
import { MatchesProperty } from "./decorators/matches-property";
import { IValidationDecorator, createDecorator } from "./decorators/decorator-builder";
import { MatchesRegex } from "./decorators/matches-regex";
import { EmailAddress } from "./decorators/email-address";
import { watchValidationIssues } from "./validation/watch-validation-issues";
import { ValidationResult } from "./validation/validation-result";

export {
    isValid,
    validate,
    Required,
    IValidationDecorator,
    createDecorator,
    MinLength,
    MatchesProperty,
    MatchesRegex,
    EmailAddress,
    watchValidationIssues,
    ValidationResult
}
