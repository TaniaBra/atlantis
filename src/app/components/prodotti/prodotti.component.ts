import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {

  prodotti: Prodotto[] = [];

  constructor(private prodottoService: ProdottoService, private route: ActivatedRoute, private carrelloService: CarrelloService) { }

  ngOnInit() {
    let categoryId: string | null = "";
    this.route.paramMap.subscribe(params => {
      if (params.get("id")) {
        categoryId = params.get("id");
        this.prodottoService.getProdottiByIdCategoria(categoryId).subscribe(res => {
          this.prodotti = res;
        });
      }
    });
  }
  
  addProdotto(prodotto: Prodotto) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }

}
