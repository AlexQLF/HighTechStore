import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-tel-fixe',
  templateUrl: './tel-fixe.component.html',
  styleUrls: ['./tel-fixe.component.css']
})
export class TelFixeComponent implements OnInit {
  
  list: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getAll("/tel-fixe/articles/").subscribe(result => { 
      this.list = result;
    });
  }

}
