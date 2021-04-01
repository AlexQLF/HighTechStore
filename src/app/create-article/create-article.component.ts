import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../interface/Article';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  Categories: any

  constructor(private ArticlesService : ArticlesService, private http:HttpClient, private router: ActivatedRoute, private router1: Router, private _location:Location) {

   }

  ngOnInit(): void {
    var reqHeader = new HttpHeaders();
     
     reqHeader = reqHeader.append('Content-Type', 'application/json');
    this.http.get('http://localhost:8080/ArchSI_Td_Angular/rest/shop/categories', {headers : reqHeader}).subscribe(result => {
      console.log(result);
      this.Categories = result;
    });
    
  }

  onSubmit(data: any)
  {

    
    
    var article = this.ArticlesService.addArticle(data).subscribe(result => {
      console.log(result);

      var tmp = result as Article;

      console.log(tmp.category);


      const map = new Map();
      map.set("stockage > disque-dur", "Stockage/disque-dur");
      map.set("stockage > cle-usb", "Stockage/cle-usb");
      map.set("stockage > accessoires-stockage", "Stockage/stockage-accessoires");
      map.set("telephonie > tel-fixe", "Phones/telFixe");
      map.set("telephonie > smartphone", "Phones/smartPhone");
      map.set("telephonie > accessoires-telephonie", "Phone/telAccessoires");
      map.set("ordinateur > pc-de-bureau", "Ordinateurs/PcBureau");
      map.set("ordinateur > pc-portable", "Ordinateurs/PcPortable");
      map.set("ordinateur > accessoires-ordinateur", "Ordinateurs/PcAccessoires");

      this.router1.navigate(['/' + map.get(tmp.category)]);

    });

  }

}
