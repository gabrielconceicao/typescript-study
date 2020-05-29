import { Negotiation, Negotiations } from '../models/index'
import { MessageView, NegotiationView } from '../views/index'
import { domInject, throttle } from '../helpers/decorators/index';
import { NegotiationService } from '../services/negotiationService';


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
    private _service = new NegotiationService();

    constructor() {
        this._negotiationView.update(this._negotiations);        
    }

    @throttle()
    add(event: Event) {       
        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ",")),
            parseFloat(this._inputValue.val()),
            parseInt(this._inputAmount.val())
        );
        
    
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);   
        this._messageView.update("Negociação incluida com sucesso!");
    }

    @throttle()
    importData() {
        this._service.getNegotiations(res => {
            if(res.ok) return res;
            throw new Error(res.statusText);
        })
        .then(negotiations => {
            const importNegotiations = this._negotiations.getAllNegotiations();
            negotiations
                .filter( negotiation => !importNegotiations.some(alreadyImport => negotiation.equals(alreadyImport)))
                .forEach(negotiation => this._negotiations.add(negotiation));
            this._negotiationView.update(this._negotiations);
            this._messageView.update("Importação concluída com sucesso!");
        });
    }

}