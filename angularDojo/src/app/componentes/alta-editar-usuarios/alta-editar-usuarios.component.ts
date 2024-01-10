import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-editar-usuarios',
  templateUrl: './alta-editar-usuarios.component.html',
  styleUrls: ['./alta-editar-usuarios.component.css']
})
export class AltaEditarUsuariosComponent implements OnInit {
  titulo = "ALTA USUARIO";
  btnAccion:string = "Guardar";
  control:boolean = true; // true: alta  false: editar
  nombreForm ="";
  correoForm ="";
  rolForm = "";
  dojoForm = "";

  cadena = localStorage.getItem("usuarioEditar");
  usuarioEditar = JSON.parse(this.cadena!);
  formularioUsuario: FormGroup;

  usuario:Usuarios ={
      "id":0,
      "nombre":"",
      "password":"",
      "correo":"",
      "rol":"",
      "dojo":"",
  }

  ngOnInit(): void {
    this.comprobarUsuario();
  }

  constructor(private servicioUsuario: UsuariosGestionService,
    private router: Router,
    private location:Location,
    private fb:FormBuilder
    ){
      this.formularioUsuario = this.fb.group({
        nombre: ["", Validators.required],
        correo: ["", Validators.required],
        password: [""],
        rol: ["", Validators.required],
        dojo: ["", Validators.required],
      });
    }

    comprobarUsuario(){
      if(this.usuarioEditar != null){
        this.control=false;
        this.titulo = "EDITAR USUARIO";
        this.usuario = this.usuarioEditar;
      }
    }

    editar(){
      this.comprobarFormulario();

      const request:Usuarios={
        id : this.usuario.id ,
        password: this.usuario.password,
        nombre: this.nombreForm,
        correo: this.correoForm,
        rol: this.rolForm,
        dojo: this.dojoForm,
      }
      this.servicioUsuario.editar(request).subscribe({
        next:(response)=>{
          if(response.status){
            localStorage.removeItem("usuarioEditar");
            this.router.navigate(['tablaUsuarios'])
          }else
            alert('Error al editar el usuario');
        },
        complete: ()=>{}
      })
    }

    alta(){
      const request:Usuarios ={
        id:0,
        password: this.formularioUsuario.value.password,
        nombre: this.formularioUsuario.value.nombre,
        correo: this.formularioUsuario.value.correo,
        rol:this.formularioUsuario.value.rol,
        dojo: this.formularioUsuario.value.dojo,
      }
      this.servicioUsuario.guardar(request).subscribe({
        next:(response)=>{
          if(response.status){
            this.router.navigate(["tablaUsuarios"]);
          }else
            alert("ERROR AL CREAR EL USUARIO: \n Credenciales mal escritas");
        },
         complete: ()=>{}
      });
    }

    comprobarFormulario(){
        if(this.formularioUsuario.value.nombre != "")
          this.nombreForm = this.formularioUsuario.value.nombre;
        else
          this.nombreForm = this.usuario.nombre;

        if(this.formularioUsuario.value.correo != "")
          this.correoForm = this.formularioUsuario.value.correo;
        else
          this.correoForm = this.usuario.correo;
        
        if(this.formularioUsuario.value.rol != "")
          this.rolForm = this.formularioUsuario.value.rol;
        else
          this.rolForm = this.usuario.rol;
        
        if(this.formularioUsuario.value.dojo != "")
         this.dojoForm = this.formularioUsuario.value.dojo;
        else
         this.dojoForm = this.usuario.dojo; 
    }

    cancelar(){
      this.location.back();
    }

}
