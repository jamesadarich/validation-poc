import { Matches } from "./matches";

export function EmailAddress(target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) {
    Matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)(target, decoratedPropertyKey, descriptor);
}