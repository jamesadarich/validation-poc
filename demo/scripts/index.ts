import { User } from "./models/user";
import { isValid, validate } from "../../src/main";
import { plainToClass } from "class-transformer";

const example = new User();
 
(window as any).validate = validate;
(window as any).isValid = isValid;
(window as any).example = example;

window.onload = () => {
    require("./react-example");
}

(window as any).apiTest = (user: object) => {
    const deserializedUser = plainToClass(User, user);

    return isValid(deserializedUser) ? "everything is good" : validate(deserializedUser);
}
