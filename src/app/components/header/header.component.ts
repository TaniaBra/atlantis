import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { CarrelloService } from 'src/app/services/carrello/carrello.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService, private carrelloService: CarrelloService, private router: Router,
    private toastsService: ToastsService) { }

  loggedUser?: Utente;
  hidden = false;

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

  logout() {
    this.loginService.aggiornaUtente(null);
    this.router.navigate(["/login"]);
    this.toastsService.showSuccessMessage('Logout effettuato correttamente!', 'Successo');

  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  getNumeroProdotti() {
    return this.carrelloService.getNumeroProdotti();
  }

  procediConLogin() {
    const path = this.router.url;
    this.loginService.redirectLogin.next(path);
    this.router.navigate(['/login']);
  }

}
