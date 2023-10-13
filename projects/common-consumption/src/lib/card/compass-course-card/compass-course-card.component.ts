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
  showProgress: boolean = false;
  completionPercentage: any;
  contentType:string;
  duration:string;

  constructor() { }

  ngOnInit(): void {
    if (this.data["enrolledDate"] == undefined) {
      this.name = this.data['name'];
      // if (this.data["subject"] !== undefined) {
      //   if (this.data["subject"].length > 1) {
      //     this.category = this.data['subject'].join(", ");
      //   } else {
      //     this.category = this.data['subject'];
      //   }
      // }
      this.category = this.data['targetTaxonomyCategory4Ids'][0];
      if (this.data['posterImage'] !== undefined) {
        this.image = this.data['posterImage'];
      }
      this.contentType = this.data['contentType'];
      if (this.data['Duration'] !== undefined) {
        this.duration = this.data['Duration'];
      }
    } else {
      this.name = this.data['courseName'];
      // if (this.data['content']["subject"] !== undefined) {
      //   if (this.data['content']['subject'].length > 1) {
      //     this.category = this.data['content']['subject'].join(", ");
      //   } else {
      //     this.category = this.data['content']['subject'];
      //   }
      // }
      this.category = this.data['targetTaxonomyCategory4Ids'][0];
      if (this.data['content']['posterImage'] !== undefined) {
        this.image = this.data['content']['posterImage'];
      }
      if (this.data['completionPercentage'] !== undefined) {
        this.showProgress = true;
        this.completionPercentage = this.data['completionPercentage'];
      }
      this.contentType = this.data['content']['contentType'];
      if (this.data['content']['Duration'] !== undefined) {
        this.image = this.data['content']['Duration'];
      }
    }
  }

  fetchProgress() {
    var bgColor = "#024f9d";
    // var endDate = (this.course.batch!=null && this.course.batch.endDate!=null)?new Date(this.course.batch.endDate):null;
    if(this.completionPercentage == "100") {
      bgColor = "#07bc81"; // green
    } 
    // else if (endDate!=null && endDate < new Date()) {
    //   bgColor = "#ff4558"; // red
    // }
    let widthStyle = this.completionPercentage+"%";
    return {
      width: widthStyle,
      'background-color':bgColor
    };
  }

}
