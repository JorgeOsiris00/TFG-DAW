import { Component,OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/clases/alumno';
import { AlumnosGestionService } from 'src/app/servicios/alumnos-gestion.service';

@Component({
  selector: 'app-alta-editar-alumno',
  templateUrl: './alta-editar-alumno.component.html',
  styleUrls: ['./alta-editar-alumno.component.css']
})
export class AltaEditarAlumnoComponent implements OnInit {

  
  titulo:string = "ALTA ALUMNO";
  btnAccion:string = "Guardar";
  control: boolean = true; // true: alta  false: editar
  nombreFormulario= ""; 
  apellidoFormulario= "" ; 
  rangoFormulario= "";
  dojoFormulario= "";
  codigoAlumno= "";

  cadena = localStorage.getItem("alumnoEditar");
  alumnoEditar = JSON.parse(this.cadena!);
  formularioAlumno:FormGroup;

    alumno:Alumno ={
      "idAlumno": 0,
      "nombre":"",
      "apellido": "",
      "rango": "",
      "codigoAlumno": "",
      "dojo":"",
    }
  
  ngOnInit(): void {
    this.comprobarUsuario();
  }

  
  constructor(private servicioAlumno: AlumnosGestionService,
    private fb:FormBuilder,
    private location:Location,
    private router: Router) { 
      this.formularioAlumno = this.fb.group({
        nombre:["",Validators.required],
        apellido:["",Validators.required],
        rango:["",Validators.required],
        codigoAlumno:["",Validators.required],
        dojo:["",Validators.required],
      });
    }


  comprobarUsuario(){
    console.log(this.alumnoEditar);
    if(this.alumnoEditar != null){
      this.control = false;
      this.titulo = "EDITAR ALUMNO";
      this.alumno = this.alumnoEditar;
    }
  }

  editar(){
    this.comprobacionFormulario();

    const request:Alumno ={
      idAlumno: this.alumno.idAlumno,
      nombre: this.nombreFormulario,
      apellido: this.apellidoFormulario,
      rango: this.rangoFormulario,
      dojo: this.dojoFormulario,
      codigoAlumno: this.codigoAlumno,
    }
    console.log(request);
    this.servicioAlumno.editar(request).subscribe({
      next:(response)=>{
        if(response.status){
          localStorage.removeItem("alumnoEditar");
          this.router.navigate(["tablaAlumnos"]);
        }else
         alert( "ERROR AL EDITAR: \n Credencial mal escrita");
      },
        complete: () =>{}
    });
  }

  alta(){
    const request:Alumno ={
      idAlumno: 0,
      nombre: this.formularioAlumno.value.nombre,
      apellido: this.formularioAlumno.value.apellido,
      rango: this.formularioAlumno.value.rango,
      dojo: this.formularioAlumno.value.dojo,
      codigoAlumno: this.formularioAlumno.value.codigoAlumno,
    }
    console.log(request);
    this.servicioAlumno.guardar(request).subscribe({
      next:(response)=>{
        if(response.status){
          this.router.navigate(["tablaAlumnos"]);
        }else
         alert("ERROR AL crear alumno: \n Credenciales mal escritas");
      },
        complete: () =>{}
    });
  }

  comprobacionFormulario(){
    if(this.formularioAlumno.value.nombre != "")
    this.nombreFormulario = this.formularioAlumno.value.nombre;
    else
       this.nombreFormulario = this.alumno.nombre;  

    if(this.formularioAlumno.value.apellido != "")
    this.apellidoFormulario = this.formularioAlumno.value.apellido;
    else
       this.apellidoFormulario = this.alumno.apellido;  

    if(this.formularioAlumno.value.rango != "")
    this.rangoFormulario = this.formularioAlumno.value.rango;
    else
       this.rangoFormulario = this.alumno.rango;  

    if(this.formularioAlumno.value.dojo != "")
    this.dojoFormulario = this.formularioAlumno.value.dojo;
    else
       this.dojoFormulario = this.alumno.dojo;  

    if(this.formularioAlumno.value.codigoAlumno != "")
    this.codigoAlumno = this.formularioAlumno.value.codigoAlumno;
    else
       this.codigoAlumno = this.alumno.codigoAlumno;  
  }

  cancelar(){
    this.location.back();
  }
  
}
