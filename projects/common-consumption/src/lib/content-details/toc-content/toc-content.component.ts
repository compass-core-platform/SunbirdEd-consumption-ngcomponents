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

  // [mimeTypesData.COLLECTION, 'assets/common-consumption/images/sprite.svg#doc'],
  // [mimeTypesData.VIDEO, 'assets/common-consumption/images/sprite.svg#play'],
  // [mimeTypesData.AUDIO, 'assets/common-consumption/images/sprite.svg#play'],
  // [mimeTypesData.INTERACTIVE, 'assets/common-consumption/images/sprite.svg#touch'],
  // [mimeTypesData.DOCS, 'assets/common-consumption/images/sprite.svg#doc'],

}
