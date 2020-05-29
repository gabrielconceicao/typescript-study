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
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
