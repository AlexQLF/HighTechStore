import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdinateursService {

  url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

  getAll(): Observable<Array<String>>{
    return this.http.get<Array<String>>(this.url);
  }

}
