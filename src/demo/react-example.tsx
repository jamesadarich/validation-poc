import * as React from "react";
import * as ReactDOM from "react-dom";
import { messagesFor } from "../main";

class InputExample extends React.Component<any, any> {

    public constructor() {

        super();

        this.state = {
            errorMessages: []
        };
    }

    onChange(event: any) {
        (window as any).example.name = (event.target as any).value;
        this.setState({
            errorMessages: messagesFor((window as any).example)
        })
    }

    render() {
        return <div>
                 <input type="text" name="name" onChange={this.onChange.bind(this)} />
                 <ul>
                    { this.state.errorMessages.map((message: string) => <li>{message}</li>) }
                 </ul>
               </div>;
    }
}

ReactDOM.render(
    <div>
        <p>Value: {(window as any).example.name}</p>
        <InputExample />
   </div>,
   document.getElementById("react-example")
);