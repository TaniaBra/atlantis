import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Immagine } from 'src/app/model/immagine';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { ImmagineService } from 'src/app/services/immagine/immagine.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {

  prodotto= new Prodotto(0, "", "", "", 0, 0, 0, 0, false);
  urlImmagineCliccata = "";
  immaginiProdotto: Immagine[] = [];
  
  constructor(private prodottoService: ProdottoService, private route: ActivatedRoute, private carrelloService: CarrelloService,
     private location: Location, private immagineService: ImmagineService) { }

  ngOnInit() {
    let prodottoId: string | null = "";
    this.route.paramMap.subscribe(params => {
      if (params.get("idProdotto")) {
        prodottoId = params.get("idProdotto");
        this.prodottoService.getProdottoById(prodottoId).subscribe(res => {
          this.prodotto = res;

          this.immagineService.getImmaginiByIdProdotto(res.id).subscribe((img : Immagine[]) =>{
            this.immaginiProdotto = img
            if(this.immaginiProdotto.length > 0){
              this.urlImmagineCliccata = this.immaginiProdotto[0].url ;

            }
          })
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
