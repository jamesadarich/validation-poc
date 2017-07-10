import { getRules } from "./get-rules";

export function isValid(obj: object, property?: string): boolean {

    const validationRules = getRules(obj).filter(x => property ? x.propertyKey === property : true);

    const subObjectsValid = Object.keys(obj)
                                    .filter(key => property ? key === property : true)
                                    .filter(key => (obj as any)[key] instanceof Object)
                                    .every(key => isValid((obj as any)[key]));

    if (!subObjectsValid) {
        return false;
    }

    return validationRules.every(rule => rule.isValid(obj as { [property: string]: boolean }));
}
