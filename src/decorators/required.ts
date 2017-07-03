import { addRule } from "../validation/add-rule";

export function Required(target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) {
    addRule((o) => !!o[decoratedPropertyKey], "must be set", target, decoratedPropertyKey);
}
