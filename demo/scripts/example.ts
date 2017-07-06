import { MinLength, Required, EmailAddress, MatchesProperty, createDecorator } from "../../src/main";

const Magic = createDecorator((parentObject, value) => false, "");

const create = <ValueType>() => {

    type T<TargetType> = {
        [PropertyName in keyof TargetType]: ValueType;
    };

    return <TargetType, PropertyName extends keyof TargetType>(target: TargetType & { [PropertyName in keyof TargetType]: ValueType },
                                                                decoratedPropertyKey: PropertyName) => {
    }
}
/*
export type N<PropertyKey, PropertyValue, ParentObject> = {
    [PropertyKey in keyof ParentObject]: PropertyValue;
}*/

// const B = <T, S extends keyof T>(target: T, decoratedPropertyKey: S) => {};//, descriptor: TypedPropertyDescriptor<string>) => {};

const B = create<string>();


const C = () => {
    return create<number>();
}

export class Example {
    
    @Required
    @MinLength(3)
    givenName: string;

    @Required
    @MinLength(3)
    familyName: string;

    age: number;

    @Required
    @EmailAddress
    emailAddress: string;

    @Required
    @EmailAddress
    @MatchesProperty("emailAddress")
    confirmEmailAddress: string;
}

B<Example, "givenName">(new Example(), "givenName")