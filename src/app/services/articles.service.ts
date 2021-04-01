import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interface/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = 'http://localhost:8080/ArchSI_Td_Angular/rest/';
  //url = 'http://f06c91b21a32.ngrok.io/ArchSI_Td_Angular/rest/';

  constructor(private http: HttpClient) { }

  getAll(endpoint: string): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.url + "shop" + endpoint);
  }
  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(this.url + "articles/" + id);
  }

  deleteArticle(id: string){
    return this.http.delete(this.url+ "articles/"+id).subscribe(data => {
      console.log(data);
    });
  }
}
