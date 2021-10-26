import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../service/api.service'
import {environment} from '../../environments/environment'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
    private ApiService:ApiService,
    private router: Router,
    private Activatedroute:ActivatedRoute,


  ) { }

  public LocationGroup = new FormGroup({
    city:new FormControl('',Validators.required),
    coordinates:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    tags:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }


  submit(){
    if(this.LocationGroup.valid){
    
    }
    this.ApiService.specialpostMethod(this.LocationGroup.value).subscribe(
      response=>{
        this.router.navigate([],{
          relativeTo: this.Activatedroute,
          queryParams: {
            enter_new_location:'done'
          },
         
        })
      }
    )
  }

}
