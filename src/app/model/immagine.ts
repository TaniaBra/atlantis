
export class Immagine {
    id: number
    url: string
    idProdotto: number
    

    constructor(id: number, url: string, idProdotto: number) {
        this.id = id;
        this.url = url;
        this.idProdotto = idProdotto;
        
    }
}