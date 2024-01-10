import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Role } from 'src/app/clases/usuarios';
import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent implements OnInit{
  cadena = localStorage.getItem("usuario");
  usuario = JSON.parse(this.cadena!);
  controlUsuario = false;
  
  constructor(private authService: UsuariosGestionService) { }


  ngOnInit() {
    console.log(this.usuario)
    if(this.usuario.contraseña == "admin"|| this.usuario.rol == "admin"){
        this.controlUsuario = true;
    }
  }
}


