import { createDecorator, IValidationDecorator } from "./decorator-builder";

const UniqueItems = createDecorator<Array<any>>(
    (parentObject, value, propertyKey) => {
        const duplicateIndexes = value.map((itemA, index) => {
            return {
                index,
                count: value.filter(itemB => itemA === itemB).length
            }
        }).filter(match => match.count > 1).map(match => match.index);

        return duplicateIndexes.length === 0;
    },
    "there are duplicate items");

export { UniqueItems };