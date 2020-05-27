System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, NegotiationView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            NegotiationView = class NegotiationView extends view_1.View {
                template(model) {
                    return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.getAllNegotiations().map(negotiation => `
                    <tr>
                        <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                        <td>${negotiation.amount}</td>
                        <td>${negotiation.value}</td>
                        <td>${negotiation.bulk}</td>
                    </tr>
                    `).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
            </table>        
        `;
                }
            };
            exports_1("NegotiationView", NegotiationView);
        }
    };
});
