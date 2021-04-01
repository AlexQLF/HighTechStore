import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interface/Article';
import { ArticlesService } from 'src/app/services/articles.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any
  
  data=""
  constructor(private router: ActivatedRoute, private articleService: ArticlesService, private _location: Location) {
   }

  ngOnInit() {
      //console.log(this.router.snapshot.params.id)
      this.data=this.router.snapshot.params.id
      this.articleService.getArticle(this.data).subscribe(result => { 
        this.article = <Article>result;
        console.log(this.article)
      });
  }

  deleteArticle(id: string){
    this.articleService.deleteArticle(id)
    this._location.back();
  }
}
