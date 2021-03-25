import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interface/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = 'http://localhost:8080/ArchSI_Td_Angular/rest/shop';

    constructor(private http: HttpClient) { }

  getAll(endpoint: string): Observable<Array<Article>>{
    return this.http.get<Array<Article>>(this.url + endpoint);
  }

}
