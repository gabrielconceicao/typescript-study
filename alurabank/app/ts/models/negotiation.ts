export class Negotiation {

    constructor (private _date: Date, private _value: number, private _amount: number) {}
    get date() {
        return this._date;
    }

    get value() {
        return this._value;
    }

    get amount() {
        return this._amount;
    }

    get bulk() {
        return this._amount * this._value;
    }

}