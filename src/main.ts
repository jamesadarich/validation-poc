import "reflect-metadata";
import { Example } from "./demos/example";
import { isValid } from "./validation/is-valid";
import { messagesFor } from "./validation/messages-for";

const example = new Example();
 
(window as any).messagesFor = messagesFor;
(window as any).isValid = isValid;
(window as any).example = example;

import "./demos/react-example";

