import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../interface/Article';
import {Location} from '@angular/common';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  Categories: any

  constructor(private ArticlesService : ArticlesService, private http:HttpClient, private router:Router, private _location:Location) {

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

      this.router.navigate(['/Home']);

      //Redirection vers la page de la catégorie...

    });

  }

}
