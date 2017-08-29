import { ValidationResult } from "./validation-result";
import { ValidationWatchers } from "../_symbols/validation-watchers";

export function watchValidationIssues(watcherFunction: (validationResult: ValidationResult) => any, target: object, propertyKey?: string) {
    let validationWatchers: Array<any> = Reflect.getMetadata(ValidationWatchers, target, propertyKey) || [];
    
    validationWatchers.unshift({
        watcherFunction: watcherFunction,
        propertyKey: propertyKey
    });

    // mark as setup test method
    Reflect.defineMetadata(ValidationWatchers, validationWatchers, target, propertyKey);
}