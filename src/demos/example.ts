import { MinLength } from "../decorators/min-length";
import { Required } from "../decorators/required";

export class Example {
    
    @Required
    @MinLength(3)
    name: string;
}
