import { Example } from "./example";
import { isValid, messagesFor } from "../../src/main";

const example = new Example();
 
(window as any).messagesFor = messagesFor;
(window as any).isValid = isValid;
(window as any).example = example;

window.onload = () => {
    require("./react-example");
}
