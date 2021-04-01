import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer : any;
  contact : any;
  data="";

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.data=this.router.snapshot.params.id
    this.http.get<Array<String>>("http://localhost:8080/ArchSI_Td_Angular/rest/shop/infos").subscribe(result => { 
        this.footer = <Array<String>>result;
        this.contact = <String>this.footer[2].split(" - ");
        console.log(this.footer)
      });
  }

}
