import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getListaProdotti() {
    return this.http.get<Prodotto[]>(CONSTANTS.BASE_PATH + "prodotti", { headers: getHeaders() });
  }

}
