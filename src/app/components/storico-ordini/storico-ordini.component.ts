import { Component } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { AcquistiService } from 'src/app/services/acquisti/acquisti.service';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-storico-ordini',
  templateUrl: './storico-ordini.component.html',
  styleUrls: ['./storico-ordini.component.css']
})
export class StoricoOrdiniComponent {


  constructor(private ordineService: OrdineService, private acquistiService: AcquistiService){}


}
