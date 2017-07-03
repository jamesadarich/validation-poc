import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationRules } from "../_symbols/validation-rules";

export function MinLength(minimumLength: number) {
    return (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => {
        let validationRules: Array<IValidationRule> = Reflect.getMetadata(ValidationRules, target) || [];

        validationRules.unshift({
            isValid: (o) => o[decoratedPropertyKey] ? o[decoratedPropertyKey].length >= minimumLength : false,
            propertyKey: decoratedPropertyKey,
            message: "must be at least " + minimumLength + " characters"
        });

        // mark as setup test method
        Reflect.defineMetadata(ValidationRules, validationRules, target);
    }
}
