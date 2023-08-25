import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'compass-banner',
  inputs: ['config'],
  templateUrl: './compass-banner-card.component.html',
  styleUrls: ['./compass-banner-card.component.scss']
})
export class CompassBannerCardComponent implements OnInit {

  @Input() config: object; 
  @Input() loginCallback: (args: any) => void;
  @Input() registerCallback: (args: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
