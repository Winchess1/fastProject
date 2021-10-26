import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, retry, map, concatMap } from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public errorMessage$ = new BehaviorSubject<string>('')

  constructor(
    private http: HttpClient,
  ) { }

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'No-Auth': 'True'
 });

 spicialRequest({city}){
   return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&APPID=${environment.apiKey}`
 }

  getMethod(url:string,data?: any):Observable<any>{
    return this.http.get(`${url}`).pipe(catchError(this.handleError.bind(this)))
  }

  postMethod(url:string,data?: any):Observable<any>{
    return this.http.post(`${url}`,data).pipe(catchError(this.handleError.bind(this)))
  }

  specialpostMethod(data):Observable<any>{
    let url = this.spicialRequest(data)
    let post = {
      city: data.city,
      description: data.description,
      tags: data.tags,
      date: new Date(),
    }
    return this.http.get(`${url}`).pipe( 
      concatMap((incomedata) => { 
        post['weather'] ={}
        post['weather'] =incomedata['weather']
       return this.http.post(`${environment.fbDbUrl}/cards.json`,post)
      }),
      catchError(this.handleError.bind(this)))
  }

  handleError(error: HttpErrorResponse | null) {
    let message = this.checkUrlMessage(error)
    this.errorMessage$.next(message)
      setTimeout(() => {
        this.errorMessage$.next(null)
      }, 5000);

     
      return throwError(error)
  }


  checkUrlMessage(error){
    if(error?.error?.error?.message){
      return error?.error?.error?.message
    }
    if(error?.error?.message){
      return error?.error?.message
    }
    if(error?.error.error){
      return error?.error.error
    }
  }

}
