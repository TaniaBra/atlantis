import { Component } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  loggedUser?: Utente;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

}
