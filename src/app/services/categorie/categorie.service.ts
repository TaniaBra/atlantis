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

  getCategoriaById(id: string | null){
    return this.http.get<Categorie>(CONSTANTS.BASE_PATH + "categoria/" + id, { headers: getHeaders() });
  }

  deleteCategoriaById(id: string | null){
    this.http.delete<Categorie>(CONSTANTS.BASE_PATH + "categoria/" + "delete",  { headers: getHeaders() });
  }

  updateCategoria(categoria : any){
    return this.http.put<Categorie>(CONSTANTS.BASE_PATH + "categorie/" + "update", categoria, { headers: getHeaders() });
  }

  insertCategoria(categoria: any){
    return this.http.post<Categorie>(CONSTANTS.BASE_PATH + "categoria/" + "insert", categoria, { headers: getHeaders() });
  }
  
}

