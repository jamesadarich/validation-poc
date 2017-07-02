import { getRules } from "./get-rules";

export function isValid(obj: object, property?: string): boolean {

    const validationRules = getRules(obj);

    return validationRules.every(rule => rule.isValid(obj as { [property: string]: boolean }));
}
