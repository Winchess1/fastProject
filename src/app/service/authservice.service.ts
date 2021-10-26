import { Injectable } from '@angular/core';
import {ApiService} from './api.service'
const TOKEN_KEY:string = 'session-token';
const EXP_TOKEN_KEY:string = 'exp-session-token';
const REGISTERED:string = 'registered';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(
  ) {  }


  get token(){
    const expDate = +localStorage.getItem(EXP_TOKEN_KEY)+1800000;
    if(expDate>new Date().getTime() && localStorage.getItem(TOKEN_KEY)){
      return true
    }
    localStorage.clear()
    return false
  }
   setToken(response){
     if(response){
      const expDate = new Date().getTime()
      localStorage.setItem(TOKEN_KEY, response.idToken);
      localStorage.setItem(EXP_TOKEN_KEY, expDate.toString());
      localStorage.setItem(REGISTERED, response.registered);
      return
     }
     localStorage.clear()
   }

   isAuthenticated(){
    return !!this.token
   }
}
