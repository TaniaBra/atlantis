
export class Prodotto {
    id: number
    nome: string
    descrizioneBreve: string
    descrizioneLunga: string
    disponibilita: number
    prezzo: number
    idCategoria: number
    urlImmagine: string
    quantita: number
    selezionato: boolean

    constructor(id: number, nome: string, descrizioneBreve: string, descrizioneLunga: string,
        disponibilita: number, prezzo: number, idCategoria: number, urlImmagine: string,
        quantita: number, selezionato: boolean) {
        this.id = id;
        this.nome = nome;
        this.descrizioneBreve = descrizioneBreve;
        this.descrizioneLunga = descrizioneLunga;
        this.disponibilita = disponibilita;
        this.prezzo = prezzo;
        this.idCategoria = idCategoria;
        this.urlImmagine = urlImmagine;
        this.quantita = quantita;
        this.selezionato = selezionato;
    }
}