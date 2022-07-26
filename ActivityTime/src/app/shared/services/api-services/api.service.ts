import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
 
@Injectable({providedIn:'root'})
export class ApiService {
  baseURL: string = "http://localhost:9000/";
  baseApiURL: string = "http://localhost:9000/api/";
 
  constructor(private http: HttpClient) {
  }

  sendData(dataMap:Map<String,String>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'registration', json_data, {'headers':headers})
  }
 
}