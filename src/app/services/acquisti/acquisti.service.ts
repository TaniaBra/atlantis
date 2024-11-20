import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Acquisto } from 'src/app/model/acquisto';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class AcquistiService {

  prodottiAcquistati = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getListaAcquisto() {
    return this.http.get<Acquisto[]>(CONSTANTS.BASE_PATH + "acquisti", { headers: getHeaders() });
  }

  getAcquistoById(id: string | null) {
    return this.http.get<Acquisto>(CONSTANTS.BASE_PATH + "acquisto/" + id, { headers: getHeaders() });
  }

  getAcquistoByIdProdotto(id: string | null) {
    return this.http.get<Acquisto>(CONSTANTS.BASE_PATH + "acquisti/prodotto/" + id, { headers: getHeaders() });
  }

  getAcquistiByIdOrdine(id: string | null) {
    return this.http.get<Acquisto[]>(CONSTANTS.BASE_PATH + "acquisti/ordine/" + id, { headers: getHeaders() });
  }

  deleteAcquistoById(id: string | null){
    return this.http.delete<void>(CONSTANTS.BASE_PATH + "acquisti/delete", { headers: getHeaders() } );
  }

  insertAcquisti(acquisti: Acquisto[]){
    return this.http.post<Acquisto[]>(CONSTANTS.BASE_PATH + "acquisti/insert", acquisti, { headers: getHeaders() } );
  }
}
