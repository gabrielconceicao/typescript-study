class Negotiation {
    constructor(_date, _value, _amount) {
        this._date = _date;
        this._value = _value;
        this._amount = _amount;
    }
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
