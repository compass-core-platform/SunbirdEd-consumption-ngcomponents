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
      progress: 25,
      totalDuration: '24m'
    },
    body: [
      {
        name: 'Practice questionto test preparedeness-Delegated legislation',
        duration: '11m 28s',
        mimeType: 'Video'
      },
      {
        name: 'Overview of Subordinate Legislation',
        duration: '11m 28s',
        mimeType: 'Video'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
