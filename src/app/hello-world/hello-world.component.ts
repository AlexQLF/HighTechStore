import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  nom_Article: String="IPHONE";
  prix_Article: number=400;
  couleur_Article: String ="Blue";
  message: String="Achat: pas encore effectué";
  confirmation: boolean= false;
  NomCategorie: String="";
  nombreArticles: String = "1";
  isColorChanged: boolean = false;
  isFontChanged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  OnAchatArticle(){
    this.confirmation=true;
    this.message="Achat effectué avec succès"
  }

  OnChoixCategorie(evt: Event){
    this.NomCategorie=(<HTMLInputElement>evt.target).value;
  }

}
