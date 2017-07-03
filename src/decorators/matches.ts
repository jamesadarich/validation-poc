import { addRule } from "../validation/add-rule";

export function Matches(regularExpression: RegExp) {
    return (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => {
        addRule((o) => regularExpression.test(o[decoratedPropertyKey]),
                "must match given pattern",
                target,
                decoratedPropertyKey);
    }
}
