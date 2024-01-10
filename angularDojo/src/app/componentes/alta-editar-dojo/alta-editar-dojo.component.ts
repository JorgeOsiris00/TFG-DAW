import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-editar-dojo',
  templateUrl: './alta-editar-dojo.component.html',
  styleUrls: ['./alta-editar-dojo.component.css']
})
export class AltaEditarDojoComponent  implements OnInit {
    titulo = "ALTA DOJO";
    btnAccion:string = "Guardar";
    control: boolean = true; // true: alta  false: editar
    nombreFormulario = "";
    paisFormulario = "";
    domicilioFormulario ="";
    calleFormulario = "";
    maestroFormulario = "";

    cadena = localStorage.getItem("dojoEditar");
    dojoEditar = JSON.parse(this.cadena!);
    formularioDojo: FormGroup;

    dojo:Dojo ={
        "id": 0,
        "nombre":"",
        "pais": "",
        "domicilio": "",
        "calle":"",
    }

    ngOnInit(): void {
      this.comprobarDojo();
    }

    constructor(private servicioDojo: DojoGestionService,
      private router: Router,
      private location:Location,
      private fb:FormBuilder) { 
        this.formularioDojo = this.fb.group({
          nombre:["",Validators.required],
          pais:["",Validators.required],
          domicilio:["",Validators.required],
          calle:["",Validators.required],
          maestro:["",Validators.required],
        });
      }

      comprobarDojo(){
        console.log(this.dojoEditar);
        if(this.dojoEditar != null){
          this.control = false;
          this.titulo = "EDITAR DOJO";
          this.dojo = this.dojoEditar;
        }
      }

      editar(){
        this.comprobacionFormulario();

        const request:Dojo ={
          id : this.dojo.id,
          nombre: this.nombreFormulario,
          pais: this.paisFormulario,
          domicilio: this.domicilioFormulario,
          calle: this.calleFormulario,
        }
        console.log(request);
        this.servicioDojo.editar(request).subscribe({
          next:(response)=>{
            if(response.status){
              localStorage.removeItem("dojoEditar");
              this.router.navigate(["tablaDojos"]);
            }else
              alert("ERROR AL EDITAR");
          },
            complete: ()=>{}
        })
      }


      alta(){
        const request:Dojo ={
          id : 0,
          nombre: this.formularioDojo.value.nombre,
          pais: this.formularioDojo.value.pais,
          domicilio: this.formularioDojo.value.domicilio,
          calle: this.formularioDojo.value.calle,
        }
        console.log(request);
        this.servicioDojo.guardar(request).subscribe({
          next:(response) =>{
            if(response.status){
              this.router.navigate(["tablaDojos"]);
            }else
              alert("ERROR al crear el dojo: \n Credenciales mal escritas");
          },
            complete: ()=>{}
        });
      }

      comprobacionFormulario(){
        if(this.formularioDojo.value.nombre != "")
          this.nombreFormulario = this.formularioDojo.value.nombre;
        else
          this.nombreFormulario = this.dojo.nombre;

        if(this.formularioDojo.value.pais !="")
          this.paisFormulario = this.formularioDojo.value.pais;
        else  
          this.paisFormulario = this.dojo.pais;
        
        if(this.formularioDojo.value.domicilio !="")
          this.domicilioFormulario = this.formularioDojo.value.domicilio;
        else
          this.domicilioFormulario = this.dojo.domicilio;  

        if(this.formularioDojo.value.calle != "")
          this.calleFormulario = this.formularioDojo.value.calle;
        else
          this.calleFormulario = this.dojo.calle;
      }

      cancelar(){
        this.location.back();
      }
}
