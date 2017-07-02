import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationRules } from "../_symbols/validation-rules";

export function getRules(obj: object) {
    return <Array<IValidationRule>>Reflect.getMetadata(ValidationRules, obj);
}
