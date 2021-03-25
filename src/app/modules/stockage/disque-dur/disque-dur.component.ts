import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css']
})
export class DisqueDurComponent implements OnInit {

  list: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getAll("/disque-dur/articles/").subscribe(result => { 
      this.list = result;
    });
  }

}
