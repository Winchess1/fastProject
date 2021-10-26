import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private Activatedroute:ActivatedRoute,
    private router: Router
  ) { }

  public loginFlag:boolean = false;

  ngOnInit(): void {
    this.Activatedroute.queryParams.subscribe(params=>{
      if(params?.login === 'true'){
        this.loginFlag = true;
      }
    })
  }

  showLogin(){
    this.loginFlag = !this.loginFlag;
    this.router.navigate([],{
      relativeTo: this.Activatedroute,
      queryParams: {
        login:true
      },
     
    })
  }

}
