import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {


  constructor(private http: HttpClient) { }

  getListaProdotti() {
    return this.http.get<Prodotto[]>(CONSTANTS.BASE_PATH + "prodotti", { headers: getHeaders() });
  }

  getProdottiByIdCategoria(id: string | null) {
    return this.http.get<Prodotto[]>(CONSTANTS.BASE_PATH + "categoria/" + id + "/prodotti", { headers: getHeaders() });
  }

  getProdottoById(id: string | null) {
    return this.http.get<Prodotto>(CONSTANTS.BASE_PATH + "categoria/" + id + "/prodotti/" + id, { headers: getHeaders() });
  }

  deleteProdottoById(id: string | null) {
    return this.http.delete<void>(CONSTANTS.BASE_PATH + "prodotti/delete", { headers: getHeaders() });
  }

  updateProdottoById(prodotto: any) {
    return this.http.put<Prodotto>(CONSTANTS.BASE_PATH + "prodotti/update", prodotto, { headers: getHeaders() });
  }

  insertProdotto(prodotto: any) {
    return this.http.post<Prodotto>(CONSTANTS.BASE_PATH + "prodotti/insert", prodotto, { headers: getHeaders() });
  }
}

