import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationRules } from "../_symbols/validation-rules";

export function getRules(obj: object): Array<IValidationRule> {
    return Reflect.getMetadata(ValidationRules, obj) || [];
}
