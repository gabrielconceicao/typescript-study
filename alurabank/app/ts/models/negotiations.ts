import { Negotiation } from './negotiation'

export class Negotiations {

    private _negotiations : Negotiation[] = [];

    add(negotiation: Negotiation) : void {
        this._negotiations.push(negotiation);
    }

    getAllNegotiations() : Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }
}