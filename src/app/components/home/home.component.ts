import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { Utente } from 'src/app/model/utente';
import {CategorieService } from 'src/app/services/categorie/categorie.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  loggedUser?: Utente;
  categorie? : Categorie[];


  constructor(private loginService: LoginService, private categorieService : CategorieService){}

  ngOnInit(){
    this.loginService.loggedUser.subscribe((loggedUser)=>{
      this.loggedUser= loggedUser;
      console.log(loggedUser);
    });
  }

}
