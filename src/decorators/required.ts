import { createDecorator, IValidationDecorator } from ".//decorator-builder";

const Required = createDecorator(
                (o, v) => !!v,
                "must be set");

export {
    Required
}
