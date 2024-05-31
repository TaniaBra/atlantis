import { HttpHeaders } from "@angular/common/http";

//un metodo dichiarato come arrowfunction
export const getHeaders = () =>{
    return new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
      });
}