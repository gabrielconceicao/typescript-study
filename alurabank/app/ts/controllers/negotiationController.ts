class NegotiationController {

    private _inputDate : HTMLInputElement;
    private _inputValue : HTMLInputElement;
    private _inputAmount : HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView('#negotiationView');
    private _messageView = new MessageView('#mensagemView');

    constructor() {
        this._inputDate = <HTMLInputElement> document.querySelector('#data');
        this._inputValue = <HTMLInputElement> document.querySelector('#valor');
        this._inputAmount = <HTMLInputElement> document.querySelector('#quantidade');
        this._negotiationView.update(this._negotiations);
    }

    add(event: Event) {

        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/-/g, ",")),
            parseFloat(this._inputValue.value),
            parseInt(this._inputAmount.value)
        );
        
    
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);   
        this._messageView.update("Negociação incluida com sucesso!");
    }

}