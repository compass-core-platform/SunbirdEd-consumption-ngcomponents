import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'compass-course-card',
  inputs: ['data'],
  templateUrl: './compass-course-card.component.html',
  styleUrls: ['./compass-course-card.component.scss']
})
export class CompassCourseCardComponent implements OnInit {

  @Input() data: object;
  name: string;
  category: string;

  constructor() { }

  ngOnInit(): void {
    if (this.data["name"] !== undefined) {
      this.name = this.data['name'];
    } else {
      this.name = this.data['courseName'];
    }
    if (this.data["subject"] !== undefined) {
      if (this.data["subject"].length > 1) {
        this.category = this.data['subject'].join(", ");
      } else {
        this.category = this.data['subject'];
      }
    } else {
      this.category = "";
    }
  }

}
