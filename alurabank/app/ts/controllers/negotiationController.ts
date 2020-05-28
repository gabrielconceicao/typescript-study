import { Negotiation, Negotiations, PartialNegotiation } from '../models/index'
import { MessageView, NegotiationView } from '../views/index'
import { domInject, throttle } from '../helpers/decorators/index';

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

        function isOK(res: Response){
            if(res.ok)
                return res;
            
            throw new Error(res.statusText);
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOK(res))
            .then(res => res.json())
            .then((dados: PartialNegotiation[]) => {
                dados
                    .map(dado => new Negotiation(new Date(), dado.montante, dado.vezes))
                    .forEach(negotiation => this._negotiations.add(negotiation))
                
                this._negotiationView.update(this._negotiations);
                
            })
            .catch(err => console.log(err.message));
    }

}