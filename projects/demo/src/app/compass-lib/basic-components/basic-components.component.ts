import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-components',
  templateUrl: './basic-components.component.html',
  styleUrls: ['./basic-components.component.scss']
})
export class BasicComponentsComponent implements OnInit {
  tocContent = {

    header : {
      title: 'Subordinate Legislation',
      progress: 100,
      totalDuration: '24m'
    },
    body: [
      {
        name: 'Practice questionto test preparedeness-Delegated legislation',
        duration: '11m 28s',
        mimeType: 'video/mp4'
      },
      {
        name: 'Overview of Subordinate Legislation',
        duration: '11m 28s',
        mimeType: 'application/vnd.sunbird.questionset',
        bestScore: 1 + '/' + 4
      }
    ]
  }
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
