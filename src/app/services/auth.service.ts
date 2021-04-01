import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'http://localhost:8080';

  loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());


  constructor(private http: HttpClient, private router : Router) {
    if(localStorage.getItem('userToken')){
      this.loginStatus.next(true);
    }
   }

   logIn(email: string, pass: string){
     var reqHeader = new HttpHeaders();
     
     reqHeader = reqHeader.append('Content-Type', 'application/json')
                          .append('login', email)
                          .append('mdp', pass);

     return this.http.post(this.rootUrl+'/ArchSI_Td_Angular/rest/admin', '', { headers : reqHeader});
   }

   logOut(){
     this.loginStatus.next(false);
     localStorage.removeItem('userToken');
     this.router.navigateByUrl('/Connexion');
   }

   checkLoginStatus() : boolean {

    return false;

   }

   SetloginStatus(){
     this.loginStatus.next(true);
   }

   isLoggesIn(){
     return this.loginStatus.asObservable();
   }

   getLoggesIn(){
     return this.loginStatus.getValue();
   }

  

}
