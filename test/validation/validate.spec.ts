import { Expect, Test, TestFixture } from "alsatian";
import { validate } from "../../src/validation/validate";
import { addRule } from "../../src/validation/add-rule";

@TestFixture("validate function")
export class ValidateFunctionTests {

    @Test("is not valid if one validator returns false")
    public notValidIfOneValidatorReturnsFalse() {
        const object = {
            property: "something"
        };

        addRule(() => false, "always wrong", object, "property");

        const result = validate(object);
        Expect(result.isValid).toBe(false);
    }
    
    @Test("is not valid if one child object validator returns false")
    public notValidIfOneChildObjectValidatorReturnsFalse() {

        const object = {
            child: {
                property: "something"
            } 
        };

        addRule(() => false, "always wrong", object.child, "property");

        const result = validate(object);
        Expect(result.isValid).toBe(false);
    }
    
    @Test("is not valid if one grand child object validator returns false")
    public notValidIfOneGrandChildObjectValidatorReturnsFalse() {

        const object = {
            child: {
                grandChild: {
                    property: "something"
                }
            } 
        };

        addRule(() => false, "always wrong", object.child.grandChild, "property");

        const result = validate(object);
        Expect(result.isValid).toBe(false);
    }
    
    @Test("is not valid if one great grand child object validator returns false")
    public notValidIfOneGreatGrandChildObjectValidatorReturnsFalse() {

        const object = {
            child: {
                grandChild: {
                    greatGrandChild: {
                        property: "something"
                    }
                }
            } 
        };

        addRule(() => false, "always wrong", object.child.grandChild.greatGrandChild, "property");

        const result = validate(object);
        Expect(result.isValid).toBe(false);
    }
    
    @Test("is not valid if one great great grand child object validator returns false")
    public notValidIfOneGreatGreatGrandChildObjectValidatorReturnsFalse() {

        const object = {
            child: {
                grandChild: {
                    greatGrandChild: {
                        greatGreatGrandChild: {
                            property: "something"
                        }
                    }
                }
            } 
        };

        addRule(() => false, "always wrong", object.child.grandChild.greatGrandChild.greatGreatGrandChild, "property");

        const result = validate(object);

        console.log("\n\n\ninfo", result, "\n\n\n");

        Expect(result.isValid).toBe(false);
    }
}