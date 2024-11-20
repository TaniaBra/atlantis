export class Ordine {
    id: number | null
    costoTotale: number
    indirizzo: string
    dataOrdine: Date
    consegnato: boolean
    metodoPagamento: string
    idUtente: number

    constructor(id: number, costoTotale: number, indirizzo: string, dataOrdine: Date, consegnato: boolean, 
        metodoPagamento: string, idUtente: number) {

            this.id = id;
            this.costoTotale = costoTotale;
            this.indirizzo = indirizzo;
            this.dataOrdine = dataOrdine;
            this.consegnato = consegnato;
            this.metodoPagamento = metodoPagamento;
            this.idUtente = idUtente;
    }
}