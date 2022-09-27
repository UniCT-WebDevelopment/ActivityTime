import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { delay, Observable } from 'rxjs';
import { User } from '../../models/user.model';
 
@Injectable({providedIn:'root'})
export class ApiService {
  //baseURL: string = "http://192.168.1.12:9000/";
  //baseApiURL: string = "http://192.168.1.12:9000/api/";
  
  baseURL: string = window.location.origin+"/";
  baseApiURL: string = window.location.origin+"/api/";
 
  constructor(private http: HttpClient) {
  }

  LoginAPI(email:String, password:String): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    return this.http.post(this.baseApiURL + 'login', {"email" : email, "password":password}, {'headers':headers})
  }

  RegistrationAPI(dataMap:Map<String,String>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'registration', json_data, {'headers':headers})
  }

  ValidationTokenAPI(token : String): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization' : `${token}`
    });
    return this.http.get(this.baseApiURL + 'validation-token', {'headers':headers})
  }

  ValidationLoginState(token : String) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization' : `${token}`
    });
    return this.http.get(this.baseApiURL + 'login-token', {'headers':headers})
  }

  GetActivityAPI(email : String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
    });
    const body = {"email":email}
    return this.http.post(this.baseApiURL + 'activities', body, {'headers':headers})
  }

  GetActivityFounderAPI(email : String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
    });
    const body = {"email":email}
    return this.http.post(this.baseApiURL + 'activitiesFounder', body, {'headers':headers})
  }

  GetFriendAPI(email : String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
    });
    const body = {"email":email}
    return this.http.post(this.baseApiURL + 'friends', body, {'headers':headers})
  }

  GetNewNotificationsAPI(email : String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
    });
    const body = {"email":email}
    return this.http.post(this.baseApiURL + 'newNotifications', body, {'headers':headers})
  }

  GetInProgressNotificationsAPI(email : String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8',
    });
    const body = {"email":email}
    return this.http.post(this.baseApiURL + 'inProgressNotifications', body, {'headers':headers})
  }

  AddActivity(dataMap:Map<String,String>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'AddActivity', json_data, {'headers':headers})
  }

  GetUserForFriend(data:String): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    return this.http.post(this.baseApiURL + 'userForFriend', {searchString:data}, {'headers':headers})
  }
  
  AddNotification(dataMap:Map<String,Object>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'sendNotification', json_data, {'headers':headers})
  }

  AddFriend(dataMap:Map<String,Object>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'addFriend', json_data, {'headers':headers})
  }

  AddActivityPartecipant(dataMap:Map<String,Object>): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    const json_data = Object.fromEntries(dataMap);
    return this.http.post(this.baseApiURL + 'addActivityPartecipant', json_data, {'headers':headers})
  }

  DeleteNotification(id:Number): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    return this.http.post(this.baseApiURL + 'deleteNotification', {"id":id}, {'headers':headers})
  }
  
  GetActivityForZone(data:String): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    return this.http.post(this.baseApiURL + 'allActivitiesForZone', {searchString:data}, {'headers':headers})
  }

  GetLatLonFromAddress(address:string,city:string): Observable<any> {
    const headers = { 'Content-Type' : 'application/json; charset=UTF-8'} 
    console.log(this.baseApiURL);
    console.log(window.location.origin);
    return this.http.get("https://nominatim.openstreetmap.org/search?format=json&limit=50&q="+address + " " + city, {'headers':headers})
  }
 
}