import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Indirizzo } from 'src/app/model/indirizzo';
import { LoginService } from '../login/login.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndirizzoService {

  indirizzoSelezionato = new Subject<Indirizzo | null>;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  deleteAddress(id: number){
    return this.http.delete(CONSTANTS.BASE_PATH + "indirizzi/delete/" + id, { headers: getHeaders() });
  }
}
