import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { Prodotto } from 'src/app/model/prodotto';
import { Utente } from 'src/app/model/utente';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import {CategorieService } from 'src/app/services/categorie/categorie.service';
import { HomeService } from 'src/app/services/home/home.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  loggedUser?: Utente;
  prodotti: Prodotto[] =[];
  


  constructor(private loginService: LoginService, private homeService: HomeService, private carrelloService: CarrelloService){}

  ngOnInit(){
    this.loginService.loggedUser.subscribe((loggedUser)=>{
      this.loggedUser= loggedUser;
    });
    this.homeService.getListaProdotti().subscribe(res => {
      this.prodotti = res;
    });
  }

}
