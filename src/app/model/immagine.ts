
export class Immagine {
    id?: number
    url?: string
    idProdotto?: number


    constructor(id?: number, url?: string, idProdotto?: number) {
        this.id = id;
        this.url = url ? url : "https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=";
        this.idProdotto = idProdotto;

    }
}