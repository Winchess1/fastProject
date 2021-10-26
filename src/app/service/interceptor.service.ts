import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthserviceService} from './authservice.service'
const TOKEN_KEY:string = 'session-token';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private AuthserviceService:AuthserviceService
  ) { }
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(this.AuthserviceService.token){
        const token = localStorage.getItem(TOKEN_KEY);
        req = req.clone({ 
          headers: req.headers.set('Accept', 'application/json'),
          params:req.params.set('auth',token) 
        });    
      
      }
      return next.handle(req).pipe(
        catchError((err:HttpErrorResponse) => {
            console.log(err)
            return throwError(err);
    
          })
          
          );

  }

}
