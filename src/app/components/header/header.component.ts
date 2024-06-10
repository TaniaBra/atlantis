import { Component } from '@angular/core';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService, private carrelloService: CarrelloService) { }

  isLoggedIn = false;
  hidden = false;
  numeroProdottiCarrello = 0; 

  ngOnInit() {
    this.loginService.loggedUser.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.carrelloService.prodottiNelCarrello.subscribe((prodottiCarrello) => {
      this.numeroProdottiCarrello = prodottiCarrello.length;
    });
  }

  logout() {
    this.loginService.loggedUser.next(false);
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }




}
