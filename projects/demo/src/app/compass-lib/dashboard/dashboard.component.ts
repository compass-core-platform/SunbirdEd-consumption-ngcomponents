import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showSideBar=false;
  config:any;
  constructor() { }

  ngOnInit(): void {
    this.config = {
      className:'dark-background',
      primaryCategory:"Course",
      contentType:'course',
      title:'Compass shared component',
      description:'Course overview page description',
      image:'assets/common-consumption/images/info-card_1.jpg',
      keywords:['tag1', 'tag2', 'tag3'],
      rating:4.2,
      numberOfRating:'123 ratings',
      duration:'12h'
    }
  }
}
