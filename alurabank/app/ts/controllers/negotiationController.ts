class NegotiationController {

    private _inputDate : JQuery;
    private _inputValue : JQuery;
    private _inputAmount : JQuery;
    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView('#negotiationView');
    private _messageView = new MessageView('#mensagemView');

    constructor() {
        this._inputDate = <JQuery> $('#data');
        this._inputValue = <JQuery> $('#valor');
        this._inputAmount = <JQuery> $('#quantidade');
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