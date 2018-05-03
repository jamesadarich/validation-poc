import * as React from "react";
import * as ReactDOM from "react-dom";
import { validate, watchValidationIssues, ValidationResult } from "../../src/main";

interface InputState {
    errorMessages: Array<string>
}

class InputExample extends React.Component<any, InputState> {

    public constructor(props: any) {
        super(props);

        this.state = {
            errorMessages: []
        };

        watchValidationIssues(this._updateValidation.bind(this), props.object, props.property);
    }

    private _touched = false;
    private _blurred = false;

    private _updateValidation(result: ValidationResult) {
        this._blurred = true;
        this._touched = true;

        this.setState({
            errorMessages: result.issues.map(x => x.message)
        });
    }

    private _onChange(event: any) {
        this.props.object[this.props.property] = (event.target as any).value;

        this._touched = true;

        this._validate();
    }

    private _onBlur(event: any) {
        this._blurred = true;
        this._validate();
    }

    private _validate() {
        if (this._blurred && this._touched) {
            this._updateValidation(validate(this.props.object, this.props.property));
        }
    }

    public render() {
        return  <div className={this.state.errorMessages.length ? "error" : ""}>
                    <label>{this.props.label}</label>
                    <input type="text"
                           name={this.props.name || this.props.label.toLowerCase().replace(/\s+/g, "-")}
                           onChange={this._onChange.bind(this)}
                           onBlur={this._onBlur.bind(this)} />
                    <ul>
                        { this.state.errorMessages.map((message, index) => <li key={index}>{message}</li>) }
                    </ul>
                </div>;
    }
}

class ListInputExample extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = {
            errorMessages: [],
            list: this.props.object[this.props.property]
        };

        watchValidationIssues(this._updateValidation.bind(this), props.object, props.property);
    }

    private _touched = false;
    private _blurred = false;

    private _updateValidation(result: ValidationResult) {
        this._blurred = true;
        this._touched = true;

        this.setState({
            errorMessages: result.issues.map(x => x.message)
        });
    }

    private _newItem() {
        this._updateList(this.state.list.concat([""]));
    }
    
    private _onItemChange(value: string, index: number) {
        this.state.list[index] = value;        
        this._updateList(this.state.list);
    }

    private _updateList(newList: Array<any>) {        
        this.setState({
            list: newList
        });

        this.props.object[this.props.property] = newList;
        this._validate();
    }

    private _validate() {
        this._updateValidation(validate(this.props.object, this.props.property));
    }

    public render() {
        const list = this.state.list;

        return  <div className={this.state.errorMessages.length ? "error" : ""}>
                    <label>{this.props.label}</label>
                    {list.map((item: any, index: number) => <input type="text" key={index} onChange={event => this._onItemChange(event.target.value, index)} value={item} />)}
                    <button type="button" onClick={() => this._newItem()}>Add food</button>
                    <ul>
                        { this.state.errorMessages.map((message: any, index: number) => <li key={index}>{message}</li>) }
                    </ul>
                </div>;
    }
}

class ExampleForm extends React.Component<any, any> {

    public constructor() {
        super();

        this.state = {
            isValid: null
        };
    }

    private handleSubmit(event: any) {
        const isValid = validate(this.props.user).isValid;

        this.setState({
            isValid
        });

        if (!isValid) {            
            event.preventDefault();
        }

        return isValid;
    }

    public render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
                    <InputExample object={this.props.user} property="givenName" label="First Name" />
                    <InputExample object={this.props.user} property="familyName" label="Last Name" />
                    <InputExample object={this.props.user} property="emailAddress" label="Email" />
                    <InputExample object={this.props.user} property="confirmEmailAddress" label="Confirm Email" />
                    <ListInputExample object={this.props.user} property="favouriteFoods" label="Favourite Foods" />
                    {this.state.isValid === false && <p>There are errors with the form, please check them out.</p>}
                    <button type="submit">Submit</button>
                </form>;
    }
}

ReactDOM.render(
    <ExampleForm user={(window as any).example} />,
    document.getElementById("react-example")
);
