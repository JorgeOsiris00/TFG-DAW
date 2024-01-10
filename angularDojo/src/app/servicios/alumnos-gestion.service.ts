import { Injectable } from '@angular/core';
import { Alumno } from '../clases/alumno';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environments';
import { ResponseApi } from '../clases/response-api';

@Injectable({
  providedIn: 'root'
})
export class AlumnosGestionService {

  private urlApi:string = environment.endpoint+"Alumno/";

  constructor( private http:HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };


  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`);
  }

  guardar(request:Alumno):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request);
  }

  editar(request:Alumno):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,request);
  }

  Eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`);
  }

  guardarSesionUsuario(usuarioSesion:MediaSession){
    localStorage.setItem("usuario", JSON.stringify(usuarioSesion));
  }
  
  obtenerSesionUsuario(){
    const cadena = localStorage.getItem("usuario");
    const usuario = JSON.parse(cadena!);
    return usuario;
  }
  
  eliminarSesionUsuario(){
    localStorage.removeItem("usuario");
  }

}
