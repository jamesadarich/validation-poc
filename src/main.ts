import "reflect-metadata";
import { Example } from "./demos/example";
import { isValid } from "./validation/is-valid";
import { messagesFor } from "./validation/messages-for";
import { MinLength } from "./decorators/min-length";
import { Required } from "./decorators/required";

const example = new Example();
 
(window as any).messagesFor = messagesFor;
(window as any).isValid = isValid;
(window as any).example = example;

import "./demos/react-example";

export {
    isValid,
    messagesFor,
    Required,
    MinLength
}
