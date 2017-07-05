import { addRule } from "../validation/add-rule";
import { createDecorator, IValidationDecorator } from "./decorator-builder";

export function MatchesProperty(propertyName: string) {
    return createDecorator(
                (target, value) => target[propertyName] === value,
                "must match " + propertyName.replace(/[A-Z]/, lowerSentenceCase));
}

function lowerSentenceCase(match: string, offset: boolean) {
	return (offset ? ' ' : '') + match.toLowerCase();
}
