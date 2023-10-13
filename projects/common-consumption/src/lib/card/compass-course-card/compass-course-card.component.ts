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
  contentType: string;
  duration: string;

  constructor() { }

  ngOnInit(): void {
    if (this.data["enrolledDate"] == undefined) {
      this.name = this.data['name'];
      if (this.data["targetTaxonomyCategory4Ids"] !== undefined) {
        if (this.data["targetTaxonomyCategory4Ids"].length > 0) {
          this.category = this.data['targetTaxonomyCategory4Ids'][0];
        }
      }
      if (this.data['posterImage'] !== undefined) {
        this.image = this.data['posterImage'];
      }
      this.contentType = this.data['contentType'];
      if (this.data['Duration'] !== undefined) {
        this.duration = this.data['Duration'];
      }
      // this.category = this.data['targetTaxonomyCategory4Ids'][0];
    } else {
      this.showProgress = true;
      this.name = this.data['courseName'];
      if (this.data['content']["targetTaxonomyCategory4Ids"] !== undefined) {
        if (this.data['content']['targetTaxonomyCategory4Ids'].length > 0) {
          this.category = this.data['content']['targetTaxonomyCategory4Ids'][0];
        }
      }
      if (this.data['content']['posterImage'] !== undefined) {
        this.image = this.data['content']['posterImage'];
      }
      if (this.data['completionPercentage'] !== undefined) {
        this.completionPercentage = this.data['completionPercentage'];
      }
      this.contentType = this.data['content']['contentType'];
      if (this.data['content']['Duration'] !== undefined) {
        this.duration = this.data['content']['Duration'];
      }
      // this.category = this.data['content']['targetTaxonomyCategory4Ids'][0];
    }
  }

  fetchProgress() {
    var bgColor = "#024f9d";
    // var endDate = (this.course.batch!=null && this.course.batch.endDate!=null)?new Date(this.course.batch.endDate):null;
    if (this.completionPercentage == "100") {
      bgColor = "#07bc81"; // green
    }
    // else if (endDate!=null && endDate < new Date()) {
    //   bgColor = "#ff4558"; // red
    // }
    let widthStyle = this.completionPercentage + "%";
    return {
      width: widthStyle,
      'background-color': bgColor
    };
  }

  getText(percentage: any) {
    if (percentage == 0) {
      return 'Not started'
    } else if (percentage == 100) {
      return 'Completed'
    } else {
      return percentage + '% completed'
    }
  }
}