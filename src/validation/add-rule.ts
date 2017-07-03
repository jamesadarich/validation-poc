import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationRules } from "../_symbols/validation-rules";

export function addRule(rule: (object: { [id: string]: string }) => boolean, message: string, target: object, propertyKey: string) {
    let validationRules: Array<IValidationRule> = Reflect.getMetadata(ValidationRules, target) || [];

    validationRules.unshift({
        isValid: rule,
        propertyKey: propertyKey,
        message: message
    });

    // mark as setup test method
    Reflect.defineMetadata(ValidationRules, validationRules, target);
}