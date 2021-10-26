import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from './service/api.service'
import {AuthserviceService} from './service/authservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'liubaTask';
  constructor(
    private Activatedroute:ActivatedRoute,
    private router: Router,
    public ApiService:ApiService,
    public AuthserviceService:AuthserviceService
    
  ){
    
  }

  ngOnInit(){

  }
}
