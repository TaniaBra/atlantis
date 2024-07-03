import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser = new BehaviorSubject<any>(null);

  redirectLogin = new BehaviorSubject<string>('/home');

  constructor(private http: HttpClient) { }

  getUser(utente: any) {
    return this.http.post(CONSTANTS.BASE_PATH + "utenti/ricerca", utente, { headers: getHeaders() }); 
  } 

  registerUser(utente: any){
    return this.http.post(CONSTANTS.BASE_PATH + "utenti/registrazione", utente, { headers: getHeaders() });
  }

  aggiornaUtente(utente: any){
    this.loggedUser.next(utente);
    localStorage.setItem("utente",JSON.stringify(utente));
  }

}
