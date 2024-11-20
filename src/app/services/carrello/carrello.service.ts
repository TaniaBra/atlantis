import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Prodotto } from 'src/app/model/prodotto';
import { AcquistiService } from '../acquisti/acquisti.service';
import { OrdineService } from '../ordine/ordine.service';
import { LoginService } from '../login/login.service';
import { Ordine } from 'src/app/model/ordine';
import { Acquisto } from 'src/app/model/acquisto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  prodottiNelCarrello = new BehaviorSubject<Prodotto[]>([]);

  prodottiAcquistati = new BehaviorSubject<Prodotto[]>([]);

  constructor(private acquistiService: AcquistiService, private ordineService: OrdineService, private loginService: LoginService) { }

  aggiungiAlCarrello(prodotto: Prodotto) {
    let prodotti = this.prodottiNelCarrello.getValue();
    const p = prodotti.find(el => el.id === prodotto.id);
    if (p && p.quantita) {
      p.quantita += 1;
    } else {
      prodotti.push({ ...prodotto, quantita: 1, selezionato: false });
    }
    this.aggiornaCarrello(prodotti);
  }

  aggiungiAlloStorico() {
    let acquisti = this.prodottiAcquistati.getValue();
  }

  rimuoviDalCarrello(prodotto: Prodotto) {
    let prodotti = this.prodottiNelCarrello.getValue();
    const p = prodotti.find(el => el.id === prodotto.id);
    if (p && p.quantita) {
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

  svuotaCarrello() {
    this.aggiornaCarrello([]);
  }

  procediConAcquisto() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let prodottiAcquistati = prodotti.filter(prodottoAcquistato => prodottoAcquistato.selezionato);
    prodotti = prodotti.filter(prodotto => !prodotto.selezionato);
    let ok = false;
    const ordine: Ordine = {
      id: null,
      costoTotale: this.getCostoParziale(),
      indirizzo: "",
      dataOrdine: new Date(),
      consegnato: false,
      metodoPagamento: "",
      idUtente: this.loginService.loggedUser.getValue().id
    }
    this.ordineService.insertOrdine(ordine).subscribe(ordineResponse => {
      if (ordineResponse) {
        const acquisti: Acquisto[] = prodottiAcquistati.map(el => {
          return { id: null, idProdotto: el.id, quantita: el.quantita ? el.quantita : 0, idOrdine: ordineResponse.id, prezzoUnitario: el.prezzo}
        })
        this.acquistiService.insertAcquisti(acquisti).subscribe(acquisti => {
          if (acquisti) {
            ok = true;
            this.aggiornaCarrello(prodotti);
          }
        });
      }
    });
    return ok;
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
      if (el.quantita) {
        quantitaProdotti += el.quantita;
      }
    });
    return quantitaProdotti;
  }

  getNumeroProdottiSelezionati() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let quantitaProdottiSelezionati = 0;
    prodotti.forEach(el => {
      if (el.selezionato && el.quantita) {
        quantitaProdottiSelezionati += el.quantita;
      }
    });
    return quantitaProdottiSelezionati;
  }

  getCostoParziale() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let costoParziale = 0;
    prodotti.forEach(el => {
      if (el.selezionato && el.quantita) {
        costoParziale += el.prezzo * el.quantita;
      }
    });
    return (costoParziale * 100) / 100;
  }

  getCostoTotale() {
    let prodotti = this.prodottiNelCarrello.getValue();
    let costoTotale = 0;
    prodotti.forEach(p => {
      if (p  && p.quantita) {
        costoTotale += p.prezzo * p.quantita;
      }
    });
    return (costoTotale * 100) / 100;
  }

}
