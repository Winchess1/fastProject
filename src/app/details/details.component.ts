import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../service/api.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public locationFlag:boolean = false;
  public cards:Array<any> = [];
  public sortbytags:Array<object> = [];
  public cardFormFlag:boolean = false;

  constructor(
    private Activatedroute:ActivatedRoute,
    private router: Router,
    private ApiService:ApiService
  ) { }

  ngOnInit(): void {
    this.Activatedroute.queryParams.subscribe(params=>{
      if(params?.enter_new_location === 'true'){
        this.cardFormFlag = true;
      }
      if(params?.enter_new_location === 'done'){
        this.cardFormFlag = false;
        this.getList()

      }
    })
   this.getList()
  }

  getList(){
    this.ApiService.getMethod(`https://weather-cards-657ed-default-rtdb.firebaseio.com/cards.json`).subscribe(
      response=>{
        for (const [key,value] of Object.entries(response)) {
           this.cards.push(value);
        }
      }
    )
  }

  showLocation(){
    this.locationFlag = !this.locationFlag;
    this.router.navigate([],{
      relativeTo: this.Activatedroute,
      queryParams: {
        enter_new_location:true
      },
     
    })
  }

}
