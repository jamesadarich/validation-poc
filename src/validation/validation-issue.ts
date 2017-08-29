export class ValidationIssue {

    public constructor(propertyKey: string, message: string) {
        this._propertyKey = propertyKey;
        this._message = message;
    }
    
    private _propertyKey: string;
    public get propertyKey() {
        return this._propertyKey;
    }

    private _message: string;
    public get message() {
        return this._message;
    }
}