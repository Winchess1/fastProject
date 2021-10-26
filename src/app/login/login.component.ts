import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute ,Router } from '@angular/router';
import {ApiService} from '../service/api.service'
import {AuthserviceService} from '../service/authservice.service'
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private ApiService:ApiService,
    private AuthserviceService:AuthserviceService
  ) { }

  public loginGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })



  ngOnInit(): void {
    this.initForms()

  }

  initForms(){

  }

  submit(){
    if(this.loginGroup.valid){
      this.loginGroup.value.returnSecureToken = true
      this.ApiService.postMethod(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKeyFb}`,this.loginGroup.value).subscribe(
        response=>{
          console.log(response)
          this.AuthserviceService.setToken(response);
          this.router.navigate(['./details']);
        }
      )
    }

  }

}
// admin@mail.ru