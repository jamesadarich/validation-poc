export interface IValidationRule {
    isValid(obj: { [property: string]: any }): boolean;
    propertyKey: string;
    message: string;
}
