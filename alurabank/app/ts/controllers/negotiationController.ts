import { Negotiation, Negotiations } from '../models/index'
import { MessageView, NegotiationView } from '../views/index'
import { domInject } from '../helpers/decorators/index';

export class NegotiationController {

    @domInject('#data')
    private _inputDate : JQuery;

    @domInject('#valor')
    private _inputValue : JQuery;

    @domInject('#quantidade')
    private _inputAmount : JQuery;

    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView('#negotiationView', true);
    private _messageView = new MessageView('#mensagemView');

    constructor() {
        this._negotiationView.update(this._negotiations);
    }

    add(event: Event) {

        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ",")),
            parseFloat(this._inputValue.val()),
            parseInt(this._inputAmount.val())
        );
        
    
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);   
        this._messageView.update("Negociação incluida com sucesso!");
    }

}