import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Acquisti } from 'src/app/model/acquisti';

@Injectable({
  providedIn: 'root'
})
export class AcquistiService {

  constructor(private http: HttpClient) { }

  getListaAcquisti() {
    return this.http.get<Acquisti[]>(CONSTANTS.BASE_PATH + "acquisti", { headers: getHeaders() });
  }

  getAcquistoById(id: string | null) {
    return this.http.get<Acquisti>(CONSTANTS.BASE_PATH + "acquisti/" +"acquisto/" + id, { headers: getHeaders() });
  }

  getAcquistoByIdProdotto(id: string | null) {
    return this.http.get<Acquisti>(CONSTANTS.BASE_PATH + "acquisti/" +"prodotto/" + id, { headers: getHeaders() });
  }

  getAcquistoByIdOrdine(id: string | null) {
    return this.http.get<Acquisti>(CONSTANTS.BASE_PATH + "acquisti/" +"ordine/" + id, { headers: getHeaders() });
  }

  deleteAcquistoById(id: string | null){
    this.http.delete<Acquisti>(CONSTANTS.BASE_PATH + "acquisti/" + "delete", { headers: getHeaders() } );
  }

  insertOrdine(acquisto: Acquisti){
    return this.http.post<Acquisti>(CONSTANTS.BASE_PATH + "acquisto/" + "insert", acquisto, { headers: getHeaders() } );
  }
}
