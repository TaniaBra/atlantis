import { Component, } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {


  prodotti: Prodotto[] = [];
  dataCorrente: Date = new Date();


  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.carrelloService.prodottiNelCarrello.subscribe((prodotti) => {
      this.prodotti = prodotti;
    });
  }

  // costo totale prodotti
  getCostoTotale() {
    return this.carrelloService.getCostoTotale();
  }

  // costo prodotti selezionati
  getCostoParziale() {
    return this.carrelloService.getCostoParziale();
  }

  removeProdotto(prodotto: Prodotto) {
    this.carrelloService.rimuoviDalCarrello(prodotto);
  }

  addProdotto(prodotto: Prodotto) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }

  getNumeroProdottiSelezionati() {
    return this.carrelloService.getNumeroProdottiSelezionati();
  }

  getNumeroProdotti() {
    return this.carrelloService.getNumeroProdotti();
  }

  toggleSelectProdotto(id: number) {
    this.carrelloService.toggleSelectProdotto(id);
  }

}
