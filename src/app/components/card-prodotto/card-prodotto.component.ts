import { Component, Input } from '@angular/core';
import { Immagine } from 'src/app/model/immagine';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { ImmagineService } from 'src/app/services/immagine/immagine.service';

@Component({
  selector: 'app-card-prodotto',
  templateUrl: './card-prodotto.component.html',
  styleUrls: ['./card-prodotto.component.css']
})
export class CardProdottoComponent {

  @Input()
  prodotto?: Prodotto;
  urlImmagine = "https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4=";

  constructor(private carrelloService: CarrelloService, private immagineService: ImmagineService) { }

  ngOnInit() {
    if (this.prodotto) {
      this.immagineService.getImmaginiByIdProdotto(this.prodotto.id).subscribe((immagini: Immagine[]) => {
        if (immagini.length > 0) {
          this.urlImmagine = immagini[0].url;
        }
      })
    }
  }
  
  addProdotto(prodotto: Prodotto) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }
}
