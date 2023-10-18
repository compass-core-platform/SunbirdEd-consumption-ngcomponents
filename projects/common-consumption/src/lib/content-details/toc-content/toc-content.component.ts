import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MimeTypeMasterData } from './../../pipes-module/mime-type';

@Component({
  selector: 'toc-content',
  templateUrl: './toc-content.component.html',
  styleUrls: ['./toc-content.component.scss']
})
export class TocContentComponent implements OnInit {
  @Input() courseModules: any = {};
  @Output() contentClicked = new EventEmitter<any>()
  mimeTypes: any = MimeTypeMasterData
  type: any;

  constructor() { }

  ngOnInit(): void {
    this.getIcons();
  }

  getIcons() {
    if(this.courseModules.body.length > 0) {
      this.courseModules.body.forEach((course) => {
        if(this.mimeTypes.VIDEO.includes(course.mimeType)) {
          this.type = 'Video';
        } else if(this.mimeTypes.AUDIO.includes(course.mimeType)) {
          this.type = 'Audio';
        } else if(this.mimeTypes.DOCS.includes(course.mimeType)) {
          this.type = 'Document';
        } else if(this.mimeTypes.QUESTIONSET.includes(course.mimeType)) {
          this.type = 'Assessment'
        } else if(this.mimeTypes.INTERACTIVE.includes(course.mimeType)) {
          this.type = 'Interactive'
        }
      })
    }
  }

  selectedContent(event: any, content: any) {
    console.log("content selected", content);
    this.contentClicked.emit({event: event, content: content, header: this.courseModules.header});
  }

  getText(val: any) {
    if(val == 0 || !val) {
      return 'Not started'
    }
    return val+'% completed';
  }
}
