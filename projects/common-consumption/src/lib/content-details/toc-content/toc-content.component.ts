import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toc-content',
  templateUrl: './toc-content.component.html',
  styleUrls: ['./toc-content.component.scss']
})
export class TocContentComponent implements OnInit {
  @Input() courseModules: any = {};
  @Output() contentClicked = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    this.getIcons();
  }

  getIcons() {
    if(this.courseModules.body.length > 0) {
      this.courseModules.body.forEach((course) => {
        if(course.mimeType == 'video/mp4') {
          course.mimeType = 'Video'
        } else if(course.mimeType == 'application/vnd.ekstep.content-collection' || course.mimeType == 'application/vnd.ekstep.ecml-archive') {
          course.mimeType = 'Document'
        } else if(course.mimeType == 'application/vnd.sunbird.questionset') {
          course.mimeType = 'Assessment'
        }
      })
    }
  }

  selectedContent(event: any, content: any) {
    console.log("content selected", content);
    this.contentClicked.emit({event: event, content: content});
  }
}
