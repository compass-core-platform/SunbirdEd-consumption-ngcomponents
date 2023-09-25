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
  }

  selectedContent(event: any, content: any) {
    console.log("content selected", content);
    this.contentClicked.emit({event: event, content: content});
  }
}
