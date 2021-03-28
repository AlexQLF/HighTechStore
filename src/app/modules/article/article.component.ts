import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //constructor(private articleService: ArticlesService, private id: number) { }

  list: any;
  //idArticle: number;

  /*ngOnInit(): void {
    this.articleService.getArticle("{{id}}").subscribe(result => { 
      this.list = result;
    });
  }*/

  //order: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    /*this.router.queryParamMap
      .subscribe((params) => {
        //this.article = { ...params.keys, ...params };
        console.log(params);
      }
      );*/
      console.log(this.router.snapshot.params)
  }
}
