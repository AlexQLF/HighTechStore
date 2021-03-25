import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {

  list: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getAll("/smartphone/articles/").subscribe(result => { 
      this.list = result;
    });
  }
}
