import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  //mi creo il behaviorsubject(perchè può essere visibile in tutte le parti del programma) di tipo Prodotto[] e lo inizializzo come vuoto
  prodottiNelCarrello = new BehaviorSubject<Prodotto[]>([]);



  constructor() { }

  //metodo per aggiungere prodotti al carrello
  //mi creo una variabile che mi dice il totale dei prodotti nel carrello con .getValue()
  // con .push inserirsco il nuovo prodotto nel carrello
  // con .next() mando la notifica a chi sottoscrive
  aggiungiAlCarrello(prodotto: Prodotto){
    let totaleProdotti = this.prodottiNelCarrello.getValue();
    totaleProdotti.push(prodotto);
    this.prodottiNelCarrello.next(totaleProdotti);
 
  }







}
