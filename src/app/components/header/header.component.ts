import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService, private carrelloService: CarrelloService, private router: Router) { }

  loggedUser?: Utente;
  hidden = false;
  numeroProdottiCarrello = 0;

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
    this.carrelloService.prodottiNelCarrello.subscribe((prodottiCarrello) => {
      this.numeroProdottiCarrello = prodottiCarrello.length;
    });
  }

  logout() {
    this.loginService.loggedUser.next(null);
    if (this.router.url.toLowerCase().includes("account")) {
      this.router.navigate(["/home"]);
    }
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }




}
