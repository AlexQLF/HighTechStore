import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUsbComponent implements OnInit {

  list: any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getAll("/cle-usb/articles/").subscribe(result => { 
      this.list = result;
    });
  }
}
