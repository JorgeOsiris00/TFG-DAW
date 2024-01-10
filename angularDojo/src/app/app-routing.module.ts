import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { AltaEditarAlumnoComponent } from './componentes/alta-editar-alumno/alta-editar-alumno.component';
import { AltaEditarDojoComponent } from './componentes/alta-editar-dojo/alta-editar-dojo.component';
import {MenuComponent} from './componentes/menu/menu.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { IndexComponent } from './componentes/index/index.component';
import { AccesibilidadComponent } from './componentes/accesibilidad/accesibilidad.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { LoginComponent } from './componentes/login/login.component';
import { IsLoggedInGuard } from './guardas/is-logged-in.guard';
import { HasRoleGuard, hasRole } from './guardas/has-role.guard';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { AltaEditarUsuariosComponent } from './componentes/alta-editar-usuarios/alta-editar-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/login',pathMatch: 'full'}, // luego habra que cambiar a Login cuando Backend este implementado la reedireccion
  { path: 'tablaDojos', component: TablaDojoComponent},
  { path: 'tablaUsuarios', component: TablaUsuariosComponent},
  { path: 'index', component: IndexComponent},
  { path: 'tablaAlumnos', component: TablaAlumnoComponent},
  { path: 'altaDojos', component:AltaEditarDojoComponent},
  { path: 'editarDojo/:id', component:AltaEditarDojoComponent},
  { path: 'altaAlumno', component:AltaEditarAlumnoComponent},
  { path: 'editarAlumno/:id', component:AltaEditarAlumnoComponent},
  { path: 'altaUsuario', component:AltaEditarUsuariosComponent},
  { path: 'editarUsuario/:id', component:AltaEditarUsuariosComponent},
  { path: 'menuComponent', component: MenuComponent}, // creo que este no es necesario
  { path: 'contactos', component:ContactoComponent},
  { path: 'noticias', component:NoticiasComponent},
  { path: 'accesibilidad', component:AccesibilidadComponent},
  { path: 'mapa', component:MapaComponent},
  { path: 'login', component:LoginComponent},
  {path: '', canLoad: [IsLoggedInGuard],
    loadChildren: () =>
      import('./componentes/index/index.component').then(
        (m) => m.IndexComponent
      ),
  },
  {path:'tablaDojos',canActivate: [hasRole(['españa','master'])], // los roles permitidos para ver paginacanLoad: [hasRole(['españa','master'])],
    loadChildren:() =>
      import('./componentes/tabla-dojo/tabla-dojo.component').then(
        (m) => m.TablaDojoComponent
        ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
