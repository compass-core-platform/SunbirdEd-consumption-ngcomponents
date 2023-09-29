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
  image: string = "/assets/images/course-1.png";

  constructor() { }

  ngOnInit(): void {
    if (this.data["enrolledDate"] == undefined) {
      this.name = this.data['name'];
      if (this.data["subject"] !== undefined) {
        if (this.data["subject"].length > 1) {
          this.category = this.data['subject'].join(", ");
        } else {
          this.category = this.data['subject'];
        }
      }
      if (this.data['posterImage'] !== undefined) {
        this.image = this.data['posterImage'];
      }
    } else {
      this.name = this.data['courseName'];
      if (this.data['content']["subject"] !== undefined) {
        if (this.data['content']['subject'].length > 1) {
          this.category = this.data['content']['subject'].join(", ");
        } else {
          this.category = this.data['content']['subject'];
        }
      }
      if (this.data['content']['posterImage'] !== undefined) {
        this.image = this.data['content']['posterImage'];
      }
    }
  }

}
