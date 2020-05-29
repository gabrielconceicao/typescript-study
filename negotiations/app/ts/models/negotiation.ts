import { Print } from './print';
import { Compare } from './equals';

export class Negotiation implements Print, Compare<Negotiation> {

    //Constructor example with attributes private 
    //constructor (private _date: Date, private _value: number, private _amount: number) {}
    
    constructor(readonly date: Date, readonly value: number, readonly amount: number){}

    get bulk() {
        return this.amount * this.value;
    }

    printLog(): void {
        console.log(`data: ${ this.date } value: ${ this.value } amount: ${ this.amount } volume: ${ this.bulk } `);
    }

    equals(negotiation: Negotiation): boolean {
        return (this.date.getDate() == negotiation.date.getDate() 
                && this.date.getMonth() == negotiation.date.getMonth() 
                && this.date.getFullYear() == negotiation.date.getFullYear())
            && this.value == negotiation.value 
            && this.amount == negotiation.amount
    }

}