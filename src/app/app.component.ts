import { Component } from '@angular/core';
import { CarrelloService } from './services/carrello/carrello.service';
import { Prodotto } from './model/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scaishop';

  constructor(private carrelloService: CarrelloService) {}

  ngOnInit() {
    const stringifiedCarrello = localStorage.getItem("carrello");
    if (stringifiedCarrello) {
      const totaleProdotti: Prodotto[] = JSON.parse(stringifiedCarrello);
      this.carrelloService.aggiornaCarrello(totaleProdotti);
    }

  }

}
