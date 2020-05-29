import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {

    getNegotiations(handler: ResponseHandler): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/dados')
                .then(res => handler(res))
                .then(res => res.json())
                .then((dados: PartialNegotiation[]) => 
                    dados.map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
                )
                .catch(err => {throw new Error("Erro ao obter dados da api")});
    }
}

export interface ResponseHandler {
    (res: Response): Response
}