import { Component } from '@angular/core';
import { CarrelloService } from './services/carrello/carrello.service';
import { Prodotto } from './model/prodotto';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scaishop';

  constructor(private carrelloService: CarrelloService, private loginService: LoginService) {}

  ngOnInit() {
    const stringifiedCarrello = localStorage.getItem("carrello");
    if (stringifiedCarrello) {
      const totaleProdotti: Prodotto[] = JSON.parse(stringifiedCarrello);
      this.carrelloService.aggiornaCarrello(totaleProdotti);
    }
    const stringifiedUtente = localStorage.getItem("utente");
    if(stringifiedUtente){
      const utente: any = JSON.parse(stringifiedUtente);
      this.loginService.aggiornaUtente(utente);
    }
  }

}
