import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus : Observable<boolean>;

  constructor(private auth : AuthService ) {
    this.loginStatus = auth.isLoggesIn();
  }

seDeconnecter(){
  this.auth.logOut();
}


  ngOnInit(): void {
  }

}
