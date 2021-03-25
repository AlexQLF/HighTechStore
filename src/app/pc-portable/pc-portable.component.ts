import { Component, OnInit } from '@angular/core';
import { OrdinateursService } from '../services/ordinateurs.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  list: any;

  constructor(private ordiService: OrdinateursService) { }

  ngOnInit(): void {
    this.ordiService.getAll().subscribe(result => { 
      this.list = result;
    });
  }

}
