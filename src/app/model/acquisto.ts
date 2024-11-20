
export class Acquisto {
    id: number | null
    idProdotto: number
    quantita: number
    idOrdine: number | null

    constructor(id: number, idProdotto: number, quantita: number, idOrdine: number) {
        this.id = id;
        this.idProdotto = idProdotto;
        this.quantita = quantita;
        this.idOrdine = idOrdine;

    }
}