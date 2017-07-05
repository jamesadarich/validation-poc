
import { addRule } from "../validation/add-rule";

export interface IDecorator {
    (target: object, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>): void;

    withMessage(message: string): this;
}

export function createDecorator(validationFunction: (object: { [id: string]: any }, value: any) => boolean, message: string): IDecorator {

    let validationMessage = message;

    const decorator = (((target: { [id: string]: any }, decoratedPropertyKey: string, descriptor?: TypedPropertyDescriptor<() => any>) => {
        addRule((object) => validationFunction(object, object[decoratedPropertyKey]),
                validationMessage,
                target,
                decoratedPropertyKey);
    }) as IDecorator);

    decorator.withMessage = (message: string) => {
        validationMessage = message;
        return decorator;
    };

    return decorator;
}