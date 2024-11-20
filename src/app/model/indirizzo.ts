export class Indirizzo {
    id: number;
    via: string;
    cap: string;
    idUtente: number;
  
    constructor(id: number, via: string, cap: string, idUtente: number) {
      this.id = id;
      this.via = via;
      this.cap = cap;
      this.idUtente = idUtente;
    }
  
  }