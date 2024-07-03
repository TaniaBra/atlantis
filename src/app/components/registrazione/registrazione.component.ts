import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  redirectPath: string = '/home';
  currentYear = new Date().getFullYear();
  minDate: Date= new Date(this.currentYear - 80, 0, 1);
  maxDate: Date= new Date;
 
  registerForm: FormGroup = this.fb.group({
    nome: ["", [Validators.required]],
    cognome: ["", [Validators.required]],
    dateOfBirth: ["", [Validators.required]],
    email: ["", [Validators.required]],
    username: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  });

  constructor(private loginService: LoginService, private router: Router, private toastService: ToastsService, 
    private fb: FormBuilder) {}

  ngOnInit(){
    this.loginService.redirectLogin.subscribe(redirectPath => {
      this.redirectPath = redirectPath;
    });
  }

  register(){
    try{
      const nome = this.registerForm.get("nome")?.value;
      const cognome = this.registerForm.get("cognome")?.value;
      const dateOfBirth = this.registerForm.get("dateOfBirth")?.value;
      const email = this.registerForm.get("email")?.value;
      const username = this.registerForm.get("username")?.value;
      const password = this.registerForm.get("password")?.value;
      const utente = {nome, cognome, dateOfBirth, email, admin: false, username, password, disabilitato: false, urlAvatar: null};
      this.loginService.registerUser(utente).subscribe(res =>{
        if(res){
          this.loginService.aggiornaUtente(res);
          this.router.navigate([this.redirectPath]);
          this.toastService.showSuccessMessage('Hai effettuato correttamente la registrazione!', 'Successo');
          console.log(res);
        } else {
          this.toastService.showErrorMessage('Qualcosa è andato storto!', 'Errore');
        }
      });
    }catch (e: any) {
      this.toastService.showErrorMessage(e.message, 'Errore');
    }
  }

}
