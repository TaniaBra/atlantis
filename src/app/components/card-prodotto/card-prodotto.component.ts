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
  immagine: Immagine = new Immagine();

  constructor(private carrelloService: CarrelloService, private immagineService: ImmagineService) { }

  ngOnInit() {
    if (this.prodotto) {
      this.immagineService.getImmaginiByIdProdotto(this.prodotto.id).subscribe((immagini: Immagine[]) => {
        if (immagini.length > 0) {
          this.immagine = immagini[0];
        }
      })
    }
  }
  
  addProdotto(prodotto: Prodotto) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }
}
