import { ValidationIssue } from "./validation-issue";

export class ValidationResult {

    public constructor(issues: Array<ValidationIssue>) {
        this._issues = issues;
        this._isValid = issues.length === 0;
    }
    
    private _isValid: boolean = false;
    public get isValid() {
        return this._isValid;
    }

    private _issues: Array<ValidationIssue>;
    public get issues() {
        return this._issues;
    }
}
