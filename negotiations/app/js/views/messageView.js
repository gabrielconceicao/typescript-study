System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, MessageView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            MessageView = class MessageView extends view_1.View {
                template(message) {
                    return `<p class="alert alert-success"><strong>${message}</strong></p>`;
                }
            };
            exports_1("MessageView", MessageView);
        }
    };
});
