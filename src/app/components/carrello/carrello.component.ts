import { Component, } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  prodotti : Map<Prodotto,number> = new Map<Prodotto,number>();

  prezzoTotale : number = 0;
  
  
  


  constructor(private carrelloService : CarrelloService){}

  ngOnInit()
  {
    this.carrelloService.prodottiNelCarrello.subscribe((prodottiCarrello) => 
    {
      this.prodotti = this.rielaboraCarrello(prodottiCarrello);
      this.prezzoTotale = this.getCostoTotale(prodottiCarrello);
    });
    //this.quantitaProdotto = this.carrelloService.quantitaProdottoService;
    
    
  }

  rielaboraCarrello(prodottiCarrello : Prodotto[])
  {
    let mappaCarrello = new Map<Prodotto,number>();

    for(let p of prodottiCarrello)
      {
        let quantita = mappaCarrello.get(p);
        if(quantita)
          {
            mappaCarrello.set(p, quantita + 1);
          }
        else{
          mappaCarrello.set(p,1);
        }
      }
      return mappaCarrello;
  }

  getCostoTotale(listaProdotti : Prodotto[])
  {
    let costoTotale : number = 0;
    for(let l of listaProdotti)
      {
        costoTotale += l.prezzo;
      }
      return costoTotale;
  }

  
  

  
 







 

}
