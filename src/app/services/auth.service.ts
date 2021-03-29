import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {
   }

   logIn(email: string, pass: string){
     var data = "login="+email+"&mdp="+pass;
     return this.http.post(this.rootUrl+'/ArchSI_Td_Angular/rest/admin',data);
   }

}
