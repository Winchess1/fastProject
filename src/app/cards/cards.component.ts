import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card
  public pictureURL = 'http://openweathermap.org/img/wn/'

  constructor() { }

  ngOnInit(): void {
  }
 
}
