
import { addRule } from "../validation/add-rule";

export interface IValidationDecorator<T, S extends keyof T> {
    (target: T, decoratedPropertyKey: S): void;

    withMessage(message: string): this;
}

export function createDecorator<ValueType = any>(validationFunction: (parentObject: any, value: ValueType) => boolean, message: string): IValidationDecorator<any, string> {

    let validationMessage = message;

    const decorator = (((target: any, decoratedPropertyKey: string) => {
        addRule((object) => validationFunction(object, object[decoratedPropertyKey]),
                validationMessage,
                target,
                decoratedPropertyKey);
    }) as IValidationDecorator<any, string>);

    decorator.withMessage = (message: string) => {
        validationMessage = message;
        return decorator;
    };

    return decorator;
}

/*
export function createDecorator<T, S extends keyof T>(validationFunction: (parentObject: T, value: T[S]) => boolean, message: string): IValidationDecorator<T, S> {

    let validationMessage = message;

    const decorator = (((target: T, decoratedPropertyKey: S, descriptor?: TypedPropertyDescriptor<() => any>) => {
        addRule<T, S>((object) => validationFunction(object, object[decoratedPropertyKey]),
                validationMessage,
                target,
                decoratedPropertyKey);
    }) as IValidationDecorator<T,S>);

    decorator.withMessage = (message: string) => {
        validationMessage = message;
        return decorator;
    };

    return decorator;
}*/