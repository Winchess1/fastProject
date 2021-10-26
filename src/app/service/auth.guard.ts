import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthserviceService} from './authservice.service'

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(
    public AuthserviceService: AuthserviceService, 
    public router: Router) { }

    canActivate(): boolean {
      if (!this.AuthserviceService.isAuthenticated()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}
