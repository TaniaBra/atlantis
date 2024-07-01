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

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

  logout() {
    this.loginService.loggedUser.next(null);
      this.router.navigate(["/login"]);
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  getNumeroProdotti() {
    return this.carrelloService.getNumeroProdotti();
  }

}
