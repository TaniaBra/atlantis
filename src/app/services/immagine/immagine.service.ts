import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONSTANTS } from "src/app/common/constants";
import { getHeaders } from "src/app/common/methods";
import { Immagine } from 'src/app/model/immagine';

@Injectable({
    providedIn: 'root'
  })
  export class ImmagineService {
    
    constructor(private http: HttpClient) { }

    getListaImmagini() {
        return this.http.get<Immagine[]>(CONSTANTS.BASE_PATH + "immagini", { headers: getHeaders() });
      }

    getImmaginiByIdProdotto(idProdotto: number | null){
        return this.http.get<Immagine[]>(CONSTANTS.BASE_PATH + "immagini/" + idProdotto, { headers: getHeaders() });
    }  

    deleteImmagineById(id: string | null) {
        return this.http.delete<void>(CONSTANTS.BASE_PATH + "immagine/delete", { headers: getHeaders() });
      }
    
      updateImmagineById(immagine: any) {
        return this.http.put<Immagine>(CONSTANTS.BASE_PATH + "immagine/update", immagine, { headers: getHeaders() });
      }
    
      insertImmagine(immagine: any) {
        return this.http.post<Immagine>(CONSTANTS.BASE_PATH + "immagine/insert", immagine, { headers: getHeaders() });
      }


  }