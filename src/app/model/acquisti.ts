
export class Acquisti{
    id: number
    idProdotto: number
    quantita: number
    idOrdine: number

    constructor(id:number, idProdotto: number, quantita: number, idOrdine: number){
        this.id = id;
        this.idProdotto = idProdotto;
        this.quantita = quantita;
        this.idOrdine = idOrdine;

    }
}