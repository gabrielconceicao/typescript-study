System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, value, amount) {
                    this.date = date;
                    this.value = value;
                    this.amount = amount;
                }
                get bulk() {
                    return this.amount * this.value;
                }
                printLog() {
                    console.log(`data: ${this.date} value: ${this.value} amount: ${this.amount} volume: ${this.bulk} `);
                }
                equals(negotiation) {
                    return (this.date.getDate() == negotiation.date.getDate()
                        && this.date.getMonth() == negotiation.date.getMonth()
                        && this.date.getFullYear() == negotiation.date.getFullYear())
                        && this.value == negotiation.value
                        && this.amount == negotiation.amount;
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
