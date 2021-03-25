import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  messageError : string =""
  constructor() { }

  Connexion(connexionForm: any){
    let data = connexionForm.value;
    console.log(connexionForm.value);
  }

  ngOnInit(): void {
  }

}
