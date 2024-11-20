import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Indirizzo } from 'src/app/model/indirizzo';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //inizializzo il FormGroup con i parametri che mi servono
  loginForm: FormGroup = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  });

  redirectPath: string = '/home';

  //inietto il FormBuilder che mi serve per richiamare il FormGroup
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router,
    private location: Location, private toastService: ToastsService) { }

  ngOnInit() {
    this.loginService.redirectLogin.subscribe(redirectPath => {
      this.redirectPath = redirectPath;
    });
  }

  //nel metodo di login con il .get prendo i parametri in input
  async login() {
    try {
      const username = this.loginForm.get("username")?.value;
      const password = this.loginForm.get("password")?.value;
      const loggedUser = await this.loginService.getUser(username, password);
      if (loggedUser) {
        this.loginService.aggiornaUtente(loggedUser);
        this.router.navigate([this.redirectPath]);
        this.toastService.showSuccessMessage('Hai effettuato correttamente il login!', 'Successo');
      } else {
        this.toastService.showErrorMessage('Qualcosa è andato storto!', 'Errore');
      }
    } catch (e: any) {
      this.toastService.showErrorMessage(e.message, 'Errore')
    }
  }

}
