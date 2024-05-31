import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http: HttpClient) { }


  getListaCategorie() {
    return this.http.get<Categorie[]>(CONSTANTS.BASE_PATH + "categorie", { headers: getHeaders() });
  }



}

