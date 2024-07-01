import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prodotto } from 'src/app/model/prodotto';
import { Utente } from 'src/app/model/utente';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  loggedUser?: Utente;
  prodotti: Prodotto[] = [];
  dataCorrente: Date = new Date();


  constructor(private carrelloService: CarrelloService, private loginService: LoginService, private router: Router,
     private toastr: ToastrService) { }

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
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

  svuotaCarrello(){
    this.carrelloService.svuotaCarrello();
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

  procediConAcquisto(){
    if(this.loggedUser){
      this.carrelloService.procediConAcquisto();
      this.showSuccessToast();
    }else{
      this.router.navigate(["/login"]);
    }
  }

  showSuccessToast() {
    console.log('Showing success toast');
    this.toastr.success('Ordine effettuato con successo!', 'Successo');
  }



}
