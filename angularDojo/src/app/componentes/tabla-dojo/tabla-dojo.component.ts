import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';
import { Observable, map } from 'rxjs';
import { Role } from 'src/app/clases/usuarios';
import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-tabla-dojo',
  templateUrl: './tabla-dojo.component.html',
  styleUrls: ['./tabla-dojo.component.css'],
})
export class TablaDojoComponent {

  dojos: Dojo[] = [];
  page = 1;
	pageSize = 4;
	collectionSize = this.dojos.length;
	
  constructor(private servicioDojo:DojoGestionService,private router:Router,private authService: UsuariosGestionService){
    this.refreshDojos();
  }
  
  ngOnInit(){
    this.consultarDojos();    
  }

  consultarDojos(){
    this.servicioDojo.lista().subscribe({
      next:(response)=>{
        if(response.status){
          this.dojos = response.value;
          console.log(this.dojos);
        }
      }
    })
  }                   

  irAltaDojo(){
   this.router.navigate(['altaDojos']);
  }
                    
  
  editar(dojo:Dojo){
   localStorage.setItem("dojoEditar", JSON.stringify(dojo)); 
   this.router.navigate(['editarDojo/'+dojo.id]);
  }

  borrar(dato:number){
    console.log(dato);
    this.servicioDojo.Eliminar(dato).subscribe({
      next:(response)=>{
        if(response.status){
          console.log(response.value);
          this.consultarDojos();  
        }else
          alert("ERROR AL ELIMINAR");
      },
        complete: () =>{

        }
    })
  }

  ordenarPorNombre(){
    this.dojos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshDojos();
  }

  ordenarPorPais(){
    this.dojos.sort((a, b) => {
      if (a.pais > b.pais) return 1
      else return -1;
    });
    this.refreshDojos();
  }


  refreshDojos() {
		this.dojos = this.dojos.map((dojo, i) => ({ idPag: i + 1, ...dojo })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}


