import { createDecorator, IValidationDecorator } from "../../src/main";

const IsAnAdult = createDecorator<number>((object, value) => value >= 18, "must be an adult");

export {
    IsAnAdult
}
