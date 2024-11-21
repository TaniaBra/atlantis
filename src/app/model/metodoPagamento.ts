
export class MetodoPagamento {
    id: number
    numeroCarta: String
    cvvCarta: String
    dataScadenzaCarta: String
    email: String
    idTipologicaPagamento: number
    idUtente: number

    constructor(id: number, numeroCarta: String, cvvCarta: String, dataScadenzaCarta: String, email: String, idTipologicaPagamento: number, idUtente: number) {
        this.id = id;
        this.numeroCarta = numeroCarta;
        this.cvvCarta = cvvCarta;
        this.dataScadenzaCarta = dataScadenzaCarta;
        this.email = email;
        this.idTipologicaPagamento = idTipologicaPagamento;
        this.idUtente = idUtente;

    }
}