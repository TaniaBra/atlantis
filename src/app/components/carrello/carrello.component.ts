import { Component, } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  prodotti : Prodotto[] = [];
  quantitaProdotto : number = 0;

  constructor(private carrelloService : CarrelloService){}

  ngOnInit()
  {
    this.carrelloService.prodottiNelCarrello.subscribe((prodottiCarrello) => 
    {
      this.prodotti = prodottiCarrello;
    });
    this.quantitaProdotto = this.carrelloService.quantitaProdottoService;
    
    
  }

  
  

  
 







 

}
