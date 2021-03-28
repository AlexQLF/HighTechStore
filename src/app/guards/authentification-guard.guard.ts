import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardGuard implements CanActivate {

  constructor(private route1 : Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
    if(localStorage.getItem('userToken') != null){
      return true;
    }
    this.route1.navigate(['/Connexion']);
    return false;
  }
  
}
