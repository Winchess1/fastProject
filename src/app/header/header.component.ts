import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthserviceService} from '../service/authservice.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private AuthserviceService:AuthserviceService,
    private Activatedroute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addNewCard(){
    this.router.navigate([],{
      relativeTo: this.Activatedroute,
      queryParams: {
        enter_new_location:true
      },
     
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
