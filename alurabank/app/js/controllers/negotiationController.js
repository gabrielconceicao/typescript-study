class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationView = new NegotiationView('#negotiationView');
        this._messageView = new MessageView('#mensagemView');
        this._inputDate = $('#data');
        this._inputValue = $('#valor');
        this._inputAmount = $('#quantidade');
        this._negotiationView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.val().replace(/-/g, ",")), parseFloat(this._inputValue.val()), parseInt(this._inputAmount.val()));
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._messageView.update("Negociação incluida com sucesso!");
    }
}
