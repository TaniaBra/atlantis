import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Utente } from 'src/app/model/utente';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser = new BehaviorSubject<any>(null);

  redirectLogin = new BehaviorSubject<string>('/home');

  constructor(private http: HttpClient) { }

  getUser(utente: any) {
    return this.http.post<Utente>(CONSTANTS.BASE_PATH + "utenti/" + "ricerca", utente, { headers: getHeaders() }); 
  } 

  deleteUserById(id: string | null){
    this.http.delete<Utente>(CONSTANTS.BASE_PATH + "utenti/" + "delete" + id, { headers: getHeaders() });
  }

  riactivatedUserById(utente: any){
    this.http.put<Utente>(CONSTANTS.BASE_PATH + "utenti/" + "riactivated", utente, { headers: getHeaders() });
  }

  registerUser(utente: any){
    return this.http.post<Utente>(CONSTANTS.BASE_PATH + "utenti/" + "registrazione", utente, { headers: getHeaders() });
  }

  updateUser(utente: any){
    return this.http.put<Utente>(CONSTANTS.BASE_PATH + "utenti/" + "update", utente, { headers: getHeaders() });
  }

  aggiornaUtente(utente: any){
    this.loggedUser.next(utente);
    localStorage.setItem("utente",JSON.stringify(utente));
  }

}
