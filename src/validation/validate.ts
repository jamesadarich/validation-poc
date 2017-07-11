import { getRules } from "./get-rules";

export function validate(obj: object, property?: string) {
    
    const subObjectRules = Object.keys(obj)
                                    .filter(key => property ? key === property : true)
                                    .filter(key => (obj as any)[key] instanceof Object)
                                    .map(key => getRules((obj as any)[key]))
                                    .reduce((concatArray, array) => concatArray.concat(array), []);

    return getRules(obj)
                .filter(x => property ? x.propertyKey === property : true)
                .concat(subObjectRules)
                .reduce((errorObject: { [propery: string]: Array<string> }, rule) => {
                    if (!errorObject[rule.propertyKey]) {
                        errorObject[rule.propertyKey] = [];
                    }
                    errorObject[rule.propertyKey].push(rule.isValid(obj as { [property: string]: boolean }) ? undefined : rule.message);
                    return errorObject;
                }, {})
}
