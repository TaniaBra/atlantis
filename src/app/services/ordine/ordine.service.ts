import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Ordine } from 'src/app/model/ordine';

@Injectable({
  providedIn: 'root'
})
export class OrdineService {

  constructor(private http: HttpClient) { }

  getListaOrdini() {
    return this.http.get<Ordine[]>(CONSTANTS.BASE_PATH + "ordini", { headers: getHeaders() });
  }

  getOrdineById(id: string | null) {
    return this.http.get<Ordine>(CONSTANTS.BASE_PATH + "ordini/" +"ordine/" + id, { headers: getHeaders() });
  }

  getOrdineByIdUtente(id: string | null) {
    return this.http.get<Ordine>(CONSTANTS.BASE_PATH + "ordini/" +"utente/" + id, { headers: getHeaders() });
  }

  getOrdineByDataOrdine(dataOrdine: Date | null) {
    return this.http.get<Ordine>(CONSTANTS.BASE_PATH + "ordini/" +"dataOrdine" + dataOrdine, { headers: getHeaders() });
  }

  deleteOrdineById(id: string | null){
    this.http.delete<Ordine>(CONSTANTS.BASE_PATH + "ordini/" + "delete", { headers: getHeaders() } );
  }

  insertOrdine(ordine: any){
    return this.http.post<Ordine>(CONSTANTS.BASE_PATH + "ordine/" + "insert", ordine, { headers: getHeaders() } );
  }
  
}
