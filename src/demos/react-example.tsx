import * as React from "react";
import * as ReactDOM from "react-dom";
import { messagesFor } from "../main";

class InputExample extends React.Component<any, any> {

    public constructor() {

        super();

        this.state = {
            errorMessages: [],
            value: ""
        };
    }

    onChange(event: any) {
        (window as any).example[this.props.property] = (event.target as any).value;
        this.setState({
            value: (event.target as any).value,
            errorMessages: messagesFor((window as any).example)
        })
    }

    render() {
        return <div>
                <Value>{(window as any).example[this.props.property]}</Value>
                 <input type="text" name="name" value={this.state.value} onChange={this.onChange.bind(this)} />
                 <ul>
                    { this.state.errorMessages.map((message: string) => <li>{message}</li>) }
                 </ul>
               </div>;
    }
}

class Value extends React.Component {
    render () {
        return <p>Value: {this.props.children}</p>;
    }
}

ReactDOM.render(
    <div>
        <InputExample property="name" />
   </div>,
   document.getElementById("react-example")
);