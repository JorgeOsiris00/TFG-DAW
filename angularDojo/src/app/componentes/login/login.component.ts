import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';
import { Login } from 'src/app/clases/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formularioLogin : FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;
  
  autentificado: boolean = true;
  email: string = "";
  clave: string = "";

  constructor(private fb:FormBuilder,private router: Router,private _usuarioServicio: UsuariosGestionService){
    this.formularioLogin = this.fb.group({
      email:["",Validators.required],
      clave:["",Validators.required],
    });

  }

  ngOnInit(): void {
  }
  
  login(){
      this.mostrarLoading = true;
      const request:Login ={
        correo: this.formularioLogin.value.email,
        clave: this.formularioLogin.value.clave,
      }
      this._usuarioServicio.iniciarSesion(request).subscribe({
        next:(response)=>{
          if(response.status){
            console.log(response.value);
            this._usuarioServicio.guardarSesionUsuario(response.value);
            this.autentificado = true;
            this.router.navigate(["index"]);
          }else{
           this.autentificado = false;
           alert(
              "ERROR AL VALIDAR: \n El email o la clave estan mal escritos"
              );
              }
        },
          complete: () =>{
            this.mostrarLoading=false;
          }
      });
    }
}
