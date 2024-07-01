import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //mi creo il behaviorsubject
  //è un boolean perchè o sei loggato oppure no
  loggedUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  getUser(utente: any) {
    return this.http.post(CONSTANTS.BASE_PATH + "utenti/ricerca", utente, { headers: getHeaders() }); 
  } 

}
