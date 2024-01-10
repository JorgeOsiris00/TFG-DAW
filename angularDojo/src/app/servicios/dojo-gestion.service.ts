import { Injectable } from '@angular/core';
import {Dojo} from '../clases/dojo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environments';
import { ResponseApi } from '../clases/response-api';


@Injectable({
  providedIn: 'root'
})
export class DojoGestionService {

  private urlApi:string = environment.endpoint+"Dojo/";

  constructor( private http:HttpClient) { }
  
  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`);
  }

  guardar(request:Dojo):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request);
  }

  editar(request:Dojo):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,request);
  }

  Eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

}
