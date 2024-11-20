
export class Acquisto {
    id: number | null
    idProdotto: number
    quantita: number
    idOrdine: number | null
    prezzoUnitario : number

    constructor(id: number, idProdotto: number, quantita: number, idOrdine: number, prezzoUnitario : number) {
        this.id = id;
        this.idProdotto = idProdotto;
        this.quantita = quantita;
        this.idOrdine = idOrdine;
        this.prezzoUnitario = prezzoUnitario;

    }
}