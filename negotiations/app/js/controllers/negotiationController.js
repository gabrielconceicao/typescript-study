System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/negotiationService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, negotiationService_1, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (negotiationService_1_1) {
                negotiationService_1 = negotiationService_1_1;
            }
        ],
        execute: function () {
            NegotiationController = (() => {
                class NegotiationController {
                    constructor() {
                        this._negotiations = new index_1.Negotiations();
                        this._negotiationView = new index_2.NegotiationView('#negotiationView', true);
                        this._messageView = new index_2.MessageView('#mensagemView');
                        this._service = new negotiationService_1.NegotiationService();
                        this._negotiationView.update(this._negotiations);
                    }
                    add(event) {
                        const negotiation = new index_1.Negotiation(new Date(this._inputDate.val().replace(/-/g, ",")), parseFloat(this._inputValue.val()), parseInt(this._inputAmount.val()));
                        this._negotiations.add(negotiation);
                        this._negotiationView.update(this._negotiations);
                        this._messageView.update("Negociação incluida com sucesso!");
                    }
                    importData() {
                        this._service.getNegotiations(res => {
                            if (res.ok)
                                return res;
                            throw new Error(res.statusText);
                        })
                            .then(negotiations => {
                            negotiations.forEach(negotiation => this._negotiations.add(negotiation));
                            this._negotiationView.update(this._negotiations);
                        });
                    }
                }
                __decorate([
                    index_3.domInject('#data')
                ], NegotiationController.prototype, "_inputDate", void 0);
                __decorate([
                    index_3.domInject('#valor')
                ], NegotiationController.prototype, "_inputValue", void 0);
                __decorate([
                    index_3.domInject('#quantidade')
                ], NegotiationController.prototype, "_inputAmount", void 0);
                __decorate([
                    index_3.throttle()
                ], NegotiationController.prototype, "add", null);
                __decorate([
                    index_3.throttle()
                ], NegotiationController.prototype, "importData", null);
                return NegotiationController;
            })();
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
