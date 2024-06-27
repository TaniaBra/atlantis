import { Component, } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {


  prodottiCarrello: Prodotto[] = [];
  prodotti: any[] = [];
  prezzoTotale: number = 0;
  dataCorrente: Date = new Date();
  

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.carrelloService.prodottiNelCarrello.subscribe((prodottiCarrello) => {
      this.prodottiCarrello = prodottiCarrello;
      this.prodotti = this.rielaboraCarrello(prodottiCarrello);
      this.prezzoTotale = this.getCostoTotale(prodottiCarrello);
    });
    //this.quantitaProdotto = this.carrelloService.quantitaProdottoService;


  }

  findProdottoById(map: Map<Prodotto, number>, id: number) {
    for (let [prodotto, quantita] of map.entries()) {
      if (prodotto.id === id) {
        return quantita;
      }
    }
    return undefined;
  }

  rielaboraCarrello(prodottiCarrello: Prodotto[]) {
    const prodottiRielaborati: any[] = [];
    prodottiCarrello.forEach(p => {
      const prodottoTrovato = prodottiRielaborati.find(el => el.id === p.id);
      if (!prodottoTrovato) {
        prodottiRielaborati.push({ ...p, quantita: 1, selezionato: true })
      } else {
        prodottoTrovato.quantita += 1;
      }
    });
    return prodottiRielaborati;
  }

  getCostoTotale(listaProdotti: Prodotto[]) {
    let costoTotale: number = 0;
    for (let l of listaProdotti) {
      costoTotale += l.prezzo;
    }
    return (costoTotale * 100) / 100;
  }

  removeProdotto(id: number) {
    const index = this.prodottiCarrello.findIndex(el => el.id === id);
    if (index > -1) {
      this.prodottiCarrello.splice(index, 1);
      this.carrelloService.aggiornaCarrello(this.prodottiCarrello);
    }
  }

  addProdotto(id: number) {
    const p = this.prodottiCarrello.find(el => el.id === id);
    if (p) {
      this.prodottiCarrello.push(p);
      this.carrelloService.aggiornaCarrello(this.prodottiCarrello);
    }
  }

  getNumeroProdottiSelezionati() {
    const tmp = this.prodottiCarrello.filter(el => {
      const prodottoTrovato = this.prodotti.find(p => p.id === el.id);
      if(prodottoTrovato){
        return prodottoTrovato.selezionato;
      }else{
        return false;
      }
    });
    return tmp.length;
  }

  selectProdotto() {
  
    }














}
