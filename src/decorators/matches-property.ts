import { addRule } from "../validation/add-rule";
import { createDecorator, IValidationDecorator } from "./decorator-builder";



export function MatchesProperty(propertyName: string) {
    return createDecorator(
                (parentObject, value) => parentObject[propertyName] === value,
                "must match " + propertyName.replace(/[A-Z]/, lowerSentenceCase));
}

function lowerSentenceCase(match: string, offset: boolean) {
	return (offset ? ' ' : '') + match.toLowerCase();
}
