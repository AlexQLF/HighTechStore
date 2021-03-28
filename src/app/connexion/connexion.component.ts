import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  messageError : string =""
  isLoginError : boolean = false;

  constructor(private AuthService: AuthService, private router: Router) { }


  ngOnInit(){
   
  }

  OnSubmit(email: any,pass: any){
    this.AuthService.logIn(email,pass).subscribe((data : any)=>{
      localStorage.setItem('userToken', data.ACCESS_TOKEN);
      this.router.navigate(['/']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
