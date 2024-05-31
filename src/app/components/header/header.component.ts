import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService) { }

  isLoggedIn = false;
  hidden = false;

  ngOnInit() {
    this.loginService.loggedUser.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.loginService.loggedUser.next(false);
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }




}
