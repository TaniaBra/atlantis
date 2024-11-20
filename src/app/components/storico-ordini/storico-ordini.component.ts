import { Component } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { Utente } from 'src/app/model/utente';
import { AcquistiService } from 'src/app/services/acquisti/acquisti.service';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { LoginService } from 'src/app/services/login/login.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-storico-ordini',
  templateUrl: './storico-ordini.component.html',
  styleUrls: ['./storico-ordini.component.css']
})
export class StoricoOrdiniComponent {

  loggedUser?: Utente;
  prodottiAcquistati: Prodotto[] = [];


  constructor(private ordineService: OrdineService, private acquistiService: AcquistiService, private prodottiService: ProdottoService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
      this.ordineService.getOrdiniByIdUtente(loggedUser.id).subscribe((ordini) => {
        ordini.forEach(ordine => {
          this.acquistiService.getAcquistiByIdOrdine(ordine.id + "").subscribe((acquisti) => {
            acquisti.forEach(acquisto => {
              this.prodottiService.getProdottoById(acquisto.idProdotto + "").subscribe((prodotto) => {
                prodotto.quantita = acquisto.quantita;
                prodotto.dataAcquisto = ordine.dataOrdine;
                prodotto.acquistato = true;
                this.prodottiAcquistati.push(prodotto);
              })
            })
          });
        });
      });

    });
  }

}
