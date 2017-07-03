import { addRule } from "../validation/add-rule";

export function MinLength(minimumLength: number) {
    return (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => {
        addRule((o) => o[decoratedPropertyKey] ? o[decoratedPropertyKey].length >= minimumLength : false,
                "must be at least " + minimumLength + " characters",
                target,
                decoratedPropertyKey);
    }
}
