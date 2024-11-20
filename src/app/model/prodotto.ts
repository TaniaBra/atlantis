
export class Prodotto {
    id: number
    nome: string
    descrizioneBreve: string
    descrizioneLunga: string
    disponibilita: number
    prezzo: number
    idCategoria: number
    quantita?: number
    selezionato?: boolean
    dataAcquisto?: Date
    acquistato?: boolean

    constructor(id: number, nome: string, descrizioneBreve: string, descrizioneLunga: string,
        disponibilita: number, prezzo: number, idCategoria: number,
        quantita?: number, selezionato?: boolean, dataAcquisto?: Date, acquistato?: boolean) {
        this.id = id;
        this.nome = nome;
        this.descrizioneBreve = descrizioneBreve;
        this.descrizioneLunga = descrizioneLunga;
        this.disponibilita = disponibilita;
        this.prezzo = prezzo;
        this.idCategoria = idCategoria;
        this.quantita = quantita;
        this.selezionato = selezionato;
        this.dataAcquisto = dataAcquisto;
        this.acquistato = acquistato;
    }
}