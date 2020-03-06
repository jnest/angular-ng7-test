import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any>{
    // return "text";
    return this.http.get('https://reqres.in/api/users');
  }
}
