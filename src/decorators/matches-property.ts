import { addRule } from "../validation/add-rule";
import { createDecorator, IValidationDecorator } from "./decorator-builder";
import { watchValidationIssues } from "../validation/watch-validation-issues";
import { validate } from "../validation/validate";

export function MatchesProperty(propertyKeyToMatch: string) {

    let watcherSet = false;

    return createDecorator(
                (parentObject, value, propertyKey) => {
                    if (!watcherSet) {
                        watchValidationIssues(() => validate(parentObject, propertyKey), parentObject, propertyKeyToMatch);
                        watcherSet = true;
                    }

                    return parentObject[propertyKeyToMatch] === value
                },
                "must match " + propertyKeyToMatch.replace(/[A-Z]/, lowerSentenceCase));
}

function lowerSentenceCase(match: string, offset: boolean) {
	return (offset ? ' ' : '') + match.toLowerCase();
}
