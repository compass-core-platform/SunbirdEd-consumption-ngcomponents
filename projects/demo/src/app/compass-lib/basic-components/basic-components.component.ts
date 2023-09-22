import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-components',
  templateUrl: './basic-components.component.html',
  styleUrls: ['./basic-components.component.scss']
})
export class BasicComponentsComponent implements OnInit {
  levelsInfo = {
    header:{
      content: 'Content Type',
      type: 'Type',
      level: 'Your level'
    },
    data: [
      {
        content: 'Consultation and Consensus Building',
        type: 'Behavioural',
        level: 3
      },
      {
        content: 'Seeking Information',
        type: 'Domain',
        level: 2
      },
      {
        content: 'Result Orientation',
        type: 'Functional',
        level: 3
      },
      {
        content: 'Decision Making',
        type: 'Functional',
        level: 4
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
