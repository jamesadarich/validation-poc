import { createDecorator, IValidationDecorator } from ".//decorator-builder";

export type N<PropertyKey, PropertyValue, ParentObject> = {
    [PropertyKey in keyof ParentObject]: PropertyValue;
}

export function MinLength<T extends N<S, string, T>, S extends keyof T>(minimumLength: number) {
    return createDecorator<T, S>(
                (parentObject, value) => value ? value.length >= minimumLength: false,
                "must be at least " + minimumLength + " characters");
}
