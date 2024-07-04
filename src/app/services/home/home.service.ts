import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Categorie } from 'src/app/model/categorie';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getListaCategorie() {
    return this.http.get<Categorie[]>(CONSTANTS.BASE_PATH + "categorie", { headers: getHeaders() });
  }

  getCategoriaById(id: string | null){
    return this.http.get<Categorie>(CONSTANTS.BASE_PATH + "categoria/" + id, { headers: getHeaders() });
  }

  getListaProdotti() {
    return this.http.get<Prodotto[]>(CONSTANTS.BASE_PATH + "prodotti", { headers: getHeaders() });
  }

  getProdottiByIdCategoria(id: string | null) {
    return this.http.get<Prodotto[]>(CONSTANTS.BASE_PATH + "categoria/" + id +"/prodotti", { headers: getHeaders() });
  }

  getProdottoById(id: string | null) {
    return this.http.get<Prodotto>(CONSTANTS.BASE_PATH + "categoria/" + id +"/prodotti/" + id, { headers: getHeaders() });
  }

}
