import { createDecorator, IValidationDecorator } from ".//decorator-builder";

export function MinLength(minimumLength: number) {
    return createDecorator(
                (o, v) => v ? v.length >= minimumLength: false,
                "must be at least " + minimumLength + " characters");
    }
}
