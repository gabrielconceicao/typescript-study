import { Negotiation } from './negotiation'
import { Print } from './print';

export class Negotiations implements Print{

    private _negotiations : Negotiation[] = [];

    add(negotiation: Negotiation) : void {
        this._negotiations.push(negotiation);
    }

    getAllNegotiations() : Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }

    printLog(): void {
        console.log(JSON.stringify(this._negotiations));
    }
}