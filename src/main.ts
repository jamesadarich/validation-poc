import "reflect-metadata";

export function isValid(obj: object, property?: string): boolean {

    const validationRules = getRules(obj);

    return validationRules.every(rule => rule.isValid(obj as { [property: string]: boolean }));
}

function getRules(obj: object) {
    return <Array<IValidationRule>>Reflect.getMetadata(ValidationRules, obj);
}

export function messagesFor(obj: object, property?: string) {
    return getRules(obj).map(rule => rule.isValid(obj as { [property: string]: boolean }) ? undefined : rule.message).filter(x => x);
}

export interface IValidationRule {
    isValid(obj: { [property: string]: any }): boolean;
    propertyKey: string;
    message: string;
}

const ValidationRules = "ValidationRules";

export function Required(target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) {
    let validationRules: Array<IValidationRule> = Reflect.getMetadata(ValidationRules, target) || [];

    validationRules.push({
        isValid: (o) => o[decoratedPropertyKey],
        propertyKey: decoratedPropertyKey,
        message: "must be set"
    });

    // mark as setup test method
    Reflect.defineMetadata(ValidationRules, validationRules, target);
}

export function MinLength(minimumLength: number) {
    return (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => {
        let validationRules: Array<IValidationRule> = Reflect.getMetadata(ValidationRules, target) || [];

        validationRules.push({
            isValid: (o) => o[decoratedPropertyKey].length >= minimumLength,
            propertyKey: decoratedPropertyKey,
            message: "must be at least " + minimumLength + " characters"
        });

        // mark as setup test method
        Reflect.defineMetadata(ValidationRules, validationRules, target);
    }
}

class Example {

    @MinLength(3)
    @Required
    name: string;
}

const example = new Example();
 
(window as any).messagesFor = messagesFor;
(window as any).isValid = isValid;
(window as any).example = example;

import "./demo/react-example";

