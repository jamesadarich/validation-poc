import * as React from "react";
import * as ReactDOM from "react-dom";
import { messagesFor } from "../../src/main";

interface InputState {
    errorMessages: Array<string>
}

class InputExample extends React.Component<any, InputState> {

    public constructor() {
        super();

        this.state = {
            errorMessages: []
        };
    }

    private _onChange(event: any) {
        this.props.object[this.props.property] = (event.target as any).value;

        this.setState({
            errorMessages: messagesFor(this.props.object, this.props.property)
        });
    }

    public render() {
        return <div>
                <Value>{this.props.object[this.props.property]}</Value>
                 <label>{this.props.label}</label>
                 <input type="text" name="name" onChange={this._onChange.bind(this)} />
                 <ul>
                    { this.state.errorMessages.map((message, index) => <li key={index}>{message}</li>) }
                 </ul>
               </div>;
    }
}

class Value extends React.Component {
    render () {
        return <p>Value: {this.props.children}</p>;
    }
}

const user = (window as any).example;

ReactDOM.render(
    <div>
        <InputExample object={user} property="givenName" label="First Name" />
        <InputExample object={user} property="familyName" label="Last Name" />
        <InputExample object={user} property="emailAddress" label="Email" />
    </div>,
   document.getElementById("react-example")
);
