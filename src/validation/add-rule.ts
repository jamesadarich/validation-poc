import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationRules } from "../_symbols/validation-rules";

export function addRule<T, S extends keyof T>(rule: (object: T) => boolean, message: string, target: T, propertyKey: S) {
    let validationRules: Array<IValidationRule> = Reflect.getMetadata(ValidationRules, target) || [];

    validationRules.unshift({
        isValid: rule,
        propertyKey: propertyKey,
        message: message
    });

    // mark as setup test method
    Reflect.defineMetadata(ValidationRules, validationRules, target);
}
