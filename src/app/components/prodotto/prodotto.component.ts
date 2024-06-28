import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {

  prodotto= new Prodotto(0, "", "", "", 0, 0, 0, "", 0, false);
 
  
  constructor(private prodottoService: ProdottoService, private route: ActivatedRoute, private carrelloService: CarrelloService,
     private location: Location) { }

  ngOnInit() {
    let prodottoId: string | null = "";
    this.route.paramMap.subscribe(params => {
      if (params.get("idProdotto")) {
        prodottoId = params.get("idProdotto");
        this.prodottoService.getProdottoById(prodottoId).subscribe(res => {
          this.prodotto = res;
          console.log(res);
        });
        
      }
    });
    
  }

  aggiungiAlCarrello(prodotto: Prodotto){
    this.carrelloService.aggiungiAlCarrello(prodotto)
  }

  goBack(){
    this.location.back();
  }

  
}
