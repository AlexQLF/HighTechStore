import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardGuard implements CanActivate {

  constructor(private route1 : Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
    if(this.authService.getLoggesIn()){
      return true;
    }else{
      this.route1.navigate(['/Connexion']);
      return true;
    }
  }
}
