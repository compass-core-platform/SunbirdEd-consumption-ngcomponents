import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() wishList : EventEmitter<any> = new EventEmitter();
  isWishListed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  addwhishList(option: string){
    this.isWishListed = !this.isWishListed;
    this.wishList.emit(option);
  }

}
