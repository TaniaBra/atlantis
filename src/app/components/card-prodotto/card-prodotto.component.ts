import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';

@Component({
  selector: 'app-card-prodotto',
  templateUrl: './card-prodotto.component.html',
  styleUrls: ['./card-prodotto.component.css']
})
export class CardProdottoComponent {

  @Input()
  prodotto?: Prodotto;

  constructor(private carrelloService: CarrelloService){}

  addProdotto(prodotto: Prodotto) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }

}
