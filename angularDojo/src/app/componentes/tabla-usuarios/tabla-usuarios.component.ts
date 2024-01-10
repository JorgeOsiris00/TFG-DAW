import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {

  usuarios: Usuarios[] =[];
  page = 1;
	pageSize = 4;
	collectionSize = this.usuarios.length;

  constructor(private servicioUsuarios:UsuariosGestionService,private router:Router){
    this.refreshUsuarios();
  }

  ngOnInit(){
    this.consultarusuarios();
  }

  consultarusuarios(){
    this.servicioUsuarios.lista().subscribe({
      next:(response)=>{
        this.usuarios = response.value;
        console.log(this.usuarios);
      }
    });
  }

  nuevoUsuario(){
    this.router.navigate(['altaUsuario']);
  }

  editar(usuario:Usuarios){
    localStorage.setItem("usuarioEditar", JSON.stringify(usuario));
    this.router.navigate(['editarUsuario/'+usuario.id]);
  }

  borrar(dato:number){
    this.servicioUsuarios.Eliminar(dato).subscribe({
      next:(response)=>{
        if(response.status){
          this.consultarusuarios();
        }else
          alert("ERROR al eliminar");
      },
        complete: () =>{}
    })
  }

  refreshUsuarios() {
		this.usuarios = this.usuarios.map((usuarios, i) => ({ idPag: i + 1, ...usuarios })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
