import { Required, MatchesRegex } from "../../../src/main";

export class Address {

    @Required
    public lineOne: string;

    public lineTwo: string;

    @Required
    public town: string;

    public county: string;

    @Required
    @MatchesRegex(/[A-Z]{1,2}[0-9][A-Z,0-9]? ?[0-9][A-Z]{2}/)
    public postcode: string;
}