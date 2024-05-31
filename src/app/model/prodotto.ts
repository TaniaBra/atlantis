
export class Prodotto {
    id: number
    nome: String
    descrizioneBreve: String
    descrizioneLunga: String
    disponibilita: number
    prezzo: number
    idCategoria: number
    urlImmagine: String

    constructor(id: number, nome: String, descrizioneBreve: String, descrizioneLunga: String,
        disponibilita: number, prezzo: number, idCategoria: number, urlImmagine: String) {
        this.id = id;
        this.nome = nome;
        this.descrizioneBreve = descrizioneBreve;
        this.descrizioneLunga = descrizioneLunga;
        this.disponibilita = disponibilita;
        this.prezzo = prezzo;
        this.idCategoria = idCategoria;
        this.urlImmagine = urlImmagine;
    }
}