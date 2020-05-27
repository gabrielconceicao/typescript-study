class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationView = new NegotiationView('#negotiationView');
        this._messageView = new MessageView('#mensagemView');
        this._inputDate = document.querySelector('#data');
        this._inputValue = document.querySelector('#valor');
        this._inputAmount = document.querySelector('#quantidade');
        this._negotiationView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseFloat(this._inputValue.value), parseInt(this._inputAmount.value));
        this._negotiations.add(negotiation);
        this._negotiationView.update(this._negotiations);
        this._messageView.update("Negociação incluida com sucesso!");
    }
}
