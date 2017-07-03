import { getRules } from "./get-rules";

export function isValid(obj: object, property?: string): boolean {

    const validationRules = getRules(obj).filter(x => property ? x.propertyKey === property : true);

    return validationRules.every(rule => rule.isValid(obj as { [property: string]: boolean }));
}
