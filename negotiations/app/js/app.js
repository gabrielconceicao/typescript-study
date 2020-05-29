System.register(["./controllers/negotiationController"], function (exports_1, context_1) {
    "use strict";
    var negotiationController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negotiationController_1_1) {
                negotiationController_1 = negotiationController_1_1;
            }
        ],
        execute: function () {
            controller = new negotiationController_1.NegotiationController();
            $('.form').submit(controller.add.bind(controller));
            $('#import').click(controller.importData.bind(controller));
        }
    };
});
