import { getRules } from "./get-rules";
import { getValidationWatchers } from "./get-validation-watchers";
import { ValidationIssue } from "./validation-issue";
import { ValidationResult } from "./validation-result";
import { IValidationRule } from "../_interfaces/validation-rule.i";

function getSubObjectRules(obj: { [key: string]: any }, parentKey: string): Array<IValidationRule> {

    const subObjectKeys = Object.keys(obj)
                                .filter(key => obj[key] instanceof Object);

    const grandChildRules = subObjectKeys.map(key => Object.keys(obj[key]).map(subKey => {
                                            return {
                                                key: `${key}.${subKey}`,
                                                value: obj[key][subKey]
                                            };
                                        }))
                                        .reduce((concatArray, array) => concatArray.concat(array), [])
                                        .filter(v => v.value instanceof Object)
                                        .map(value => getRules(value.value)
                                                        .map(rule => {
                                                            rule.propertyKey = `${parentKey}.${value.key}.${rule.propertyKey}`;
                                                            return rule;
                                                        })
                                                        .concat(getSubObjectRules(value.value, value.key)))
                                        .reduce((concatArray, array) => concatArray.concat(array), []);

    return Object.keys(obj)
                    .filter(key => (obj as any)[key] instanceof Object)
                    .map(key => getRules((obj as any)[key]).map(rule => {
                        rule.propertyKey = `${parentKey}.${key}.${rule.propertyKey}`;
                        return rule;
                    }))
                    .reduce((concatArray, array) => concatArray.concat(array), [])
                    .concat(grandChildRules);

}

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
                .concat(getSubObjectRules(obj, ""));

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
