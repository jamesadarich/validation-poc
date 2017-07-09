import { createDecorator, IValidationDecorator } from "../decorators/decorator-builder";

export type N<PropertyKey, PropertyValue, ParentObject> = {
    [PropertyKey in keyof ParentObject]: PropertyValue;
}

export function MatchesRegex(regularExpression: RegExp) {
    return createDecorator<string>(
                (parentObject, value) => regularExpression.test(value),
                "must match given pattern");
}
