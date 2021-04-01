import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interface/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  article: Article
  Categories: any
  ArticleCategory: any
  data=""

  constructor(private articleService : ArticlesService, private http:HttpClient, private router: ActivatedRoute, private router1: Router) {
    this.article = <Article>{};
   }

  ngOnInit(): void {

    var reqHeader = new HttpHeaders();
    reqHeader = reqHeader.append('Content-Type', 'application/json');
    this.http.get('http://localhost:8080/ArchSI_Td_Angular/rest/shop/categories', {headers : reqHeader}).subscribe(result => {
      //console.log(result);
      this.Categories = result;
    });


    this.data=this.router.snapshot.params.id

    //console.log(this.data);
    this.articleService.getArticle(this.data).subscribe(result => { 
      this.article = <Article>result;
      //console.log(this.article)
    });


    
  }

  onSubmit(data: any)
  {

    var id = this.router.snapshot.params.id;

    //console.log(id);

    this.articleService.updateArticle(data, id).subscribe(data => {
      console.log(data);
      this.article = <Article>data;


      const map = new Map();
      map.set("stockage >disque-dur", "Stockage/disque-dur");
      map.set("stockage > cle-usb", "Stockage/cle-usb");
      map.set("stockage > accessoires-stockage", "Stockage/stockage-accessoires");
      map.set("telephonie > tel-fixe", "Phones/telFixe");
      map.set("telephonie > smartphone", "Phones/smartPhone");
      map.set("telephonie > accessoires-telephonie", "Phone/telAccessoires");
      map.set("ordinateur > pc-de-bureau", "Ordinateurs/PcBureau");
      map.set("ordinateur > pc-portable", "Ordinateurs/PcPortable");
      map.set("ordinateur > accessoires-ordinateur", "Ordinateurs/PcAccessoires");

      console.log(this.article.category);

      this.router1.navigate(["/" + map.get(this.article.category)]);


    });

    

  }

}
