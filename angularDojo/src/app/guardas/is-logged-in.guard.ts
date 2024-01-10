import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsuariosGestionService } from '../servicios/usuarios-gestion.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
 /*
  constructor(private userService: UsuariosGestionService, private router: Router){}
  canLoad(): Observable<boolean | UrlTree>  {
    return this.userService.IsLoggedIn.pipe(
      map((IsLoggedIn) => IsLoggedIn || this.router.createUrlTree(["/login"]))
      
    );
  }
  */
}
