import { createDecorator, IValidationDecorator } from ".//decorator-builder";

export type N<PropertyKey, PropertyValue, ParentObject> = {
    [PropertyKey in keyof ParentObject]: PropertyValue;
}

export function MinLength(minimumLength: number) {
    return createDecorator<string | Array<any>>(
                (parentObject, value) => value ? value.length >= minimumLength: false,
                "must be at least " + minimumLength + " characters");
}
