import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Indirizzo } from 'src/app/model/indirizzo';
import { Utente } from 'src/app/model/utente';
import { ToastsService } from '../toasts/toasts.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser = new BehaviorSubject<any>(null);

  redirectLogin = new BehaviorSubject<string>('/home');

  constructor(private http: HttpClient, private toastService: ToastsService) { }

  getUserInfo(utente: any) {
    return this.http.post<Utente>(CONSTANTS.BASE_PATH + "utenti/ricerca", utente, { headers: getHeaders() });
  }

  deleteUserById(id: string | null) {
    return this.http.delete<void>(CONSTANTS.BASE_PATH + "utenti/delete" + id, { headers: getHeaders() });
  }

  riactivatedUserById(utente: any) {
    this.http.put<Utente>(CONSTANTS.BASE_PATH + "utenti/riactivated", utente, { headers: getHeaders() });
  }

  registerUser(utente: any) {
    return this.http.post<Utente>(CONSTANTS.BASE_PATH + "utenti/registrazione", utente, { headers: getHeaders() });
  }

  updateUser(utente: any) {
    return this.http.put<Utente>(CONSTANTS.BASE_PATH + "utenti/update", utente, { headers: getHeaders() });
  }

  aggiornaUtente(utente: any) {
    this.loggedUser.next(utente);
    if (utente) localStorage.setItem("utente", JSON.stringify({ username: utente.username, password: utente.password }));
    else localStorage.removeItem("utente");
  }

  getIndirizziByIdUser(idUtente: number) {
    return this.http.get<Indirizzo[]>(CONSTANTS.BASE_PATH + "utenti/indirizzi/" + idUtente, { headers: getHeaders() });
  }

  saveIndirizzo(indirizzo: any) {
    return this.http.post<Indirizzo>(CONSTANTS.BASE_PATH + "utenti/indirizzi", indirizzo, { headers: getHeaders() });
  }

  async getUser(username: string | undefined, password: string | undefined): Promise<Utente | null> {
    const utente = await this.getUserInfo({ username, password }).toPromise();
    if (utente) {
      const indirizzi: Indirizzo[] | undefined = await this.getIndirizziByIdUser(utente.id).toPromise();
      if(indirizzi){
        const loggedUser = { ...utente, indirizzi };
        return loggedUser;
      }
    }
    return null;
  }


}
