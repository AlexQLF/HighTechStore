import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-tel-accessoires',
  templateUrl: './tel-accessoires.component.html',
  styleUrls: ['./tel-accessoires.component.css']
})
export class TelAccessoiresComponent implements OnInit {

  list: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getAll("/accessoires-telephonie/articles/").subscribe(result => { 
      this.list = result;
    });
  }

}
