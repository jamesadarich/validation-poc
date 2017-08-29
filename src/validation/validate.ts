import { getRules } from "./get-rules";
import { getValidationWatchers } from "./get-validation-watchers";
import { ValidationIssue } from "./validation-issue";
import { ValidationResult } from "./validation-result";

export function validate(obj: object, property?: string) {
    
    const subObjectRules = Object.keys(obj)
                                    .filter(key => property ? key === property : true)
                                    .filter(key => (obj as any)[key] instanceof Object)
                                    .map(key => getRules((obj as any)[key]).map(rule => {
                                        rule.propertyKey = `${key}.${rule.propertyKey}`;
                                        return rule;
                                    }))
                                    .reduce((concatArray, array) => concatArray.concat(array), []);

    const allRules = getRules(obj)
                .filter(x => property ? x.propertyKey === property : true)
                .concat(subObjectRules);

    const issues = allRules
                .filter(rule => !rule.isValid(obj))
                .map(rule => new ValidationIssue(rule.propertyKey, rule.message));
                /*
                .reduce((errorObject: { [propery: string]: Array<string> }, rule) => {
                    if (!errorObject[rule.propertyKey]) {
                        errorObject[rule.propertyKey] = [];
                    }
                    
                    if (rule.isValid(obj as { [property: string]: boolean }) === false) {
                        errorObject[rule.propertyKey].push(rule.message);
                    } 

                    return errorObject;
                }, {});*/
    
        allRules.map(x => x.propertyKey)
          .forEach(x => getValidationWatchers(obj, x)
                            .forEach(y => y.watcherFunction(new ValidationResult(issues.filter(z => z.propertyKey === x)))));


    return new ValidationResult(issues);
}
