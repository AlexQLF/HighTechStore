import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

isUser: boolean = false;

  constructor(private router: Router ) {

}

seDeconnecter(){
  localStorage.removeItem('userToken');
  this.router.navigateByUrl('/Connexion');
}


  ngOnInit(): void {
    if(localStorage.getItem('userToken') != null){
      this.isUser = true;
    }else{
      this.isUser = false;
    }
  }

}
