import { IValidationRule } from "../_interfaces/validation-rule.i";
import { ValidationWatchers } from "../_symbols/validation-watchers";

export function getValidationWatchers(obj: object, propertyKey?: string) {
    return <Array<any>>Reflect.getMetadata(ValidationWatchers, obj, propertyKey);
}
