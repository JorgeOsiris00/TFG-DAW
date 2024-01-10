import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/clases/alumno';
import { AlumnosGestionService } from 'src/app/servicios/alumnos-gestion.service';


@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent {
  alumnos: Alumno[] =  [];
  page = 1;
	pageSize = 4;
	collectionSize = this.alumnos.length;
	
  constructor(private servicioAlumnos:AlumnosGestionService,private router:Router){
    this.refreshAlumnos();
  }

  ngOnInit(){
    this.consultarAlumnos();    
  }

  consultarAlumnos(){
    this.servicioAlumnos.lista().subscribe({
      next:(response)=>{
        if(response.status){
          this.alumnos = response.value;
          console.log(this.alumnos);
        }
      }
    });
  }

  nuevoAlumno(){
    this.router.navigate(['altaAlumno']);
  }
  

  editar(alumno:Alumno){
    localStorage.setItem("alumnoEditar", JSON.stringify(alumno));
    this.router.navigate(['editarAlumno/'+alumno.codigoAlumno]);
  }

  ordenarPorNombre(){
    this.alumnos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshAlumnos();
  }

  irAltaDojo(){
    this.router.navigate(['altaAlumno']);
  }

  borrar(dato: number){
   
    console.log(dato);
    this.servicioAlumnos.Eliminar(dato).subscribe({
      next:(response)=>{
        if(response.status){
          console.log(response.value);
        this.consultarAlumnos();
        }else
         alert("ERROR AL Eliminar");
      },
        complete: () =>{
        
        }
    });
  };
 
  ordenarPorDojo(){
    this.alumnos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshAlumnos();
  }

  refreshAlumnos() {
		this.alumnos = this.alumnos.map((alumnos, i) => ({ idPag: i + 1, ...alumnos })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
