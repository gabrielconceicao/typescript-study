System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationView = new index_2.NegotiationView('#negotiationView');
                    this._messageView = new index_2.MessageView('#mensagemView');
                    this._inputDate = $('#data');
                    this._inputValue = $('#valor');
                    this._inputAmount = $('#quantidade');
                    this._negotiationView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_1.Negotiation(new Date(this._inputDate.val().replace(/-/g, ",")), parseFloat(this._inputValue.val()), parseInt(this._inputAmount.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationView.update(this._negotiations);
                    this._messageView.update("Negociação incluida com sucesso!");
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
