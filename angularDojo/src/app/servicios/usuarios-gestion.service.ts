import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ResponseApi } from '../clases/response-api';
import { Login } from '../clases/login';
import { UserWithToken, Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGestionService {

  private urlApi:string = environment.endpoint+"Usuario/";

  usuario = localStorage.getItem("usuario");
  
  private user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();


  constructor(private http:HttpClient) { }

  iniciarSesion(request:Login):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`,request);
  }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`);
  }

  guardar(request:Usuarios):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request);
  }

  editar(request:Usuarios):Observable<ResponseApi>{
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
