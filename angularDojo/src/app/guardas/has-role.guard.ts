import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { UsuariosGestionService } from '../servicios/usuarios-gestion.service';
import { Role } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanLoad, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  /*
  constructor(private authService : UsuariosGestionService) {}

  canActivate(route: ActivatedRouteSnapshot):Observable<boolean>  {
    return this.hasRole(route);
  }
  canLoad(route: Route,): Observable<boolean> {
      return this.hasRole(route);
  }

  private hasRole(route: Route | ActivatedRouteSnapshot) {
    const allowedRoles = route.data?.['allowedRoles'];

    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.rol))),
      tap((hasRole) => hasRole === false && alert('Acceso Denegado'))
    );
  }
  */
}

// para hacer una guardia funcional, Angular 14.5+   No se si funcionara
export function hasRole(allowedRole: Role[]){
  /*
  return () =>
     inject(UsuariosGestionService).user$.pipe(
      map((user) => Boolean(user && allowedRole.includes(user.rol))),
      tap((hasRole) => hasRole === false && alert('Acceso Denegado'))
    );
  */
}
