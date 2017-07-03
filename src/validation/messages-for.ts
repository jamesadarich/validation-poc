import { getRules } from "./get-rules";

export function messagesFor(obj: object, property?: string) {
    return getRules(obj)
                .filter(x => property ? x.propertyKey === property : true)
                .map(rule => rule.isValid(obj as { [property: string]: boolean }) ? undefined : rule.message)
                .filter(x => x);
}
