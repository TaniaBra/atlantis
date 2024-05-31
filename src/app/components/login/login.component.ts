import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //inizializzo il FormGroup con i parametri che mi servono
  loginForm: FormGroup = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  //inietto il FormBuilder che mi serve per richiamare il FormGroup
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }


  //nel metodo di login con il .get prendo i parametri in input
  login() {
    const username = this.loginForm.get("username")?.value;
    const password = this.loginForm.get("password")?.value;
    this.loginService.getUser({ username, password }).subscribe(res => {
      this.loginService.loggedUser.next(res);
      if (res) {
        this.router.navigate(["/home"]);
      }
    });
  }

}
