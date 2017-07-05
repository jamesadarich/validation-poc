import { createDecorator, IValidationDecorator } from "../decorators/decorator-builder";

export function MatchesRegex(regularExpression: RegExp) {
    return createDecorator(
                (o, v) => regularExpression.test(v),
                "must match given pattern");
}
