import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AltaEditarAlumnoComponent } from './componentes/alta-editar-alumno/alta-editar-alumno.component';
import { AltaEditarDojoComponent } from './componentes/alta-editar-dojo/alta-editar-dojo.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './componentes/index/index.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AccesibilidadComponent } from './componentes/accesibilidad/accesibilidad.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { LoginComponent } from './componentes/login/login.component';
import { ShowForRolesDirective } from './directivas/show-for-roles.directive';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { AltaEditarUsuariosComponent } from './componentes/alta-editar-usuarios/alta-editar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaEditarAlumnoComponent,
    AltaEditarDojoComponent,
    MenuComponent,
    NoticiasComponent,
    FooterComponent,
    ContactoComponent,
    TablaAlumnoComponent,
    IndexComponent,
    AccesibilidadComponent,
    MapaComponent,
    LoginComponent,
    ShowForRolesDirective,
    TablaDojoComponent,
    TablaUsuariosComponent,
    AltaEditarUsuariosComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ShowForRolesDirective,
  ]
})
export class AppModule { }

