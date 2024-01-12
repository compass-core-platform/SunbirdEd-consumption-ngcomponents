import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
interface cardInfo {
  title?: string,
  type?: string,
  icon?: any,
  description?: string,
  associatedCoursesTxt?: string,
  noOfCourses?: number,
  name?: string,
  btnText? : string,
  expand? : boolean,
  expandData? : any
}
@Component({
  selector: 'sb-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() data: cardInfo;
  @Input() pillName: string;
  display: boolean = false;
  @Output() filterChange: EventEmitter<{courseData?: any }> = new EventEmitter();
  @Output() favoriteIconClicked = new EventEmitter<any>()
  
  constructor() { }

  public setDisplay(){
    this.display = !this.display;
  }

  ngOnInit(): void {
  }

  emitFilterChangeEvent(item: any) {
    this.filterChange.emit(item);
  }

  wishlistIconClicked(option: string, identifier: string) {
    const obj = {
      option: option,
      identifier: identifier
    }
    this.favoriteIconClicked.emit(obj);
  }

}
