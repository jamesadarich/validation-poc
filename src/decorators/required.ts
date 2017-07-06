import { createDecorator, IValidationDecorator } from ".//decorator-builder";

const Required = createDecorator(
                (parentObject, value) => !!value,
                "must be set");

export {
    Required
}
