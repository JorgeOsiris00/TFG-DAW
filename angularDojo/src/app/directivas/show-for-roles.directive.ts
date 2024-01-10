import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from '../clases/usuarios';
import { UsuariosGestionService } from 'src/app/servicios/usuarios-gestion.service';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';


@Directive({
  selector: '[appShowForRoles]'
})
export class ShowForRolesDirective implements OnInit,OnDestroy {
  @Input('appShowForRoles') allowedRoles?: Role[];
  private sub?:Subscription;

  constructor(
      private authService:UsuariosGestionService,
      private viewContainerRef: ViewContainerRef,
      private templateRef: TemplateRef<any>
      ) { }



  ngOnInit(): void {
   /* this.sub =  this.authService.usuario.pipe(
      map((usuario)=> Boolean(usuario && this.allowedRoles?.includes('españa')) ),
      distinctUntilChanged(), // para que no se haga varias veces el tap
        // si el ususario tiene el rol, se muestra lo que haya en viewContainer, si no, se destruye el viewContainer
      tap((hasRole) => hasRole 
        ? this.viewContainerRef.createEmbeddedView(this.templateRef)
        : this.viewContainerRef.clear())
    ).subscribe();
    */
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

