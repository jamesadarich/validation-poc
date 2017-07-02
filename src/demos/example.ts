import { MinLength } from "../decorators/min-length";
import { Required } from "../decorators/required";

export class Example {
    @MinLength(3)
    @Required
    name: string;
}
