import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONSTANTS } from 'src/app/common/constants';
import { getHeaders } from 'src/app/common/methods';
import { Acquisto } from 'src/app/model/acquisto';
import { MetodoPagamento } from 'src/app/model/metodoPagamento';
import { Prodotto } from 'src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagamentoService {

  constructor(private http: HttpClient) { }

  getListaPagamenti() {
    return this.http.get<MetodoPagamento[]>(CONSTANTS.BASE_PATH + "pagamenti", { headers: getHeaders() });
  }

  getPagamentiByIdUtente(idUtente: number) {
    return this.http.get<MetodoPagamento[]>(CONSTANTS.BASE_PATH + "pagamenti" + idUtente, { headers: getHeaders() });
  }

  deletePagamentoById(id: number){
    return this.http.delete<void>(CONSTANTS.BASE_PATH + "pagamento/delete", { headers: getHeaders() } );
  }

  insertPagamento(metodoPagamento: MetodoPagamento){
    return this.http.post<MetodoPagamento>(CONSTANTS.BASE_PATH + "pagamento/insert", metodoPagamento, { headers: getHeaders() } );
  }
}
