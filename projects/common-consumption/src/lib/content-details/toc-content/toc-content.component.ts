import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toc-content',
  templateUrl: './toc-content.component.html',
  styleUrls: ['./toc-content.component.scss']
})
export class TocContentComponent implements OnInit {
  @Input() courseModules: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  selectedContent(event: any) {
    console.log("content selected", event);
  }
}
