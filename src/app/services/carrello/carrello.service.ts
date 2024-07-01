import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  prodottiNelCarrello = new BehaviorSubject<Prodotto[]>([]);
  quantitaProdottoService: number = 0;

  constructor() { }

  aggiungiAlCarrello(prodotto: Prodotto) {
    let prodotti = this.prodottiNelCarrello.getValue();
    const p = prodotti.find(el => el.id === prodotto.id);
    if (p) {
      p.quantita += 1;
    } else {
      prodotti.push({ ...prodotto, quantita: 1, selezionato: false });
    }
    this.aggiornaCarrello(prodotti);
  }

  rimuoviDalCarrello(prodotto: Prodotto) {
    let prodotti = this.prodottiNelCarrello.getValue();
    const p = prodotti.find(el => el.id === prodotto.id);
    if (p) {
      if (p.quantita === 1) {
        const index = prodotti.findIndex(el => el.id === prodotto.id);
        if (index > -1) {
          prodotti.splice(index, 1);
        }
      } else {
        p.quantita -= 1;
      }
    }
    this.aggiornaCarrello(prodotti);
  }

  svuotaCarrello(){
    let prodotti: Prodotto[] = [];
    this.aggiornaCarrello(prodotti);
  }

  procediConAcquisto(){
    let prodotti = this.prodottiNelCarrello.getValue();
    prodotti = prodotti.filter(prodotto => !prodotto.selezionato);
    this.aggiornaCarrello(prodotti);
  }

  toggleSelectProdotto(id: number) {
    let prodotti = this.prodottiNelCarrello.getValue();
    const p = prodotti.find(el => el.id === id);
    if (p) {
      p.selezionato = !p.selezionato;
      this.aggiornaCarrello(prodotti);
    }
  }

  aggiornaCarrello(totaleProdotti: Prodotto[]) {
    this.prodottiNelCarrello.next(totaleProdotti);
    localStorage.setItem("carrello", JSON.stringify(totaleProdotti));
  }

  getNumeroProdotti() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let quantitaProdotti = 0;
    prodotti.forEach(el => {
      quantitaProdotti += el.quantita;
    });
    return quantitaProdotti;
  }

  getNumeroProdottiSelezionati() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let quantitaProdottiSelezionati = 0;
    prodotti.forEach(el => {
      if (el.selezionato) {
        quantitaProdottiSelezionati += el.quantita;
      }
    });
    return quantitaProdottiSelezionati;
  }

  getCostoParziale(){
    let prodotti = this.prodottiNelCarrello.getValue();
    let costoParziale = 0;
    prodotti.forEach(el =>{
      if(el.selezionato){
        costoParziale += el.prezzo * el.quantita;
      }
    });
    return (costoParziale * 100) / 100;
  }

  getCostoTotale(){
    let prodotti = this.prodottiNelCarrello.getValue();
    let costoTotale = 0;
    prodotti.forEach(p =>{
      if(p) {
        costoTotale += p.prezzo * p.quantita;
      }
    });
    return (costoTotale * 100) / 100;
  }

}
