export class Negotiation {

    //Constructor example with attributes private 
    //constructor (private _date: Date, private _value: number, private _amount: number) {}
    
    constructor(readonly date: Date, readonly value: number, readonly amount: number){}

    get bulk() {
        return this.amount * this.value;
    }

}