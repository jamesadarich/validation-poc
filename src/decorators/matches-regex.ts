import { createDecorator, IValidationDecorator } from "../decorators/decorator-builder";

export type N<PropertyKey, PropertyValue, ParentObject> = {
    [PropertyKey in keyof ParentObject]: PropertyValue;
}

export function MatchesRegex<T extends N<S, string, T>, S extends keyof T>(regularExpression: RegExp) {
    return createDecorator<T, S>(
                (parentObject, value) => regularExpression.test(value),
                "must match given pattern");
}
