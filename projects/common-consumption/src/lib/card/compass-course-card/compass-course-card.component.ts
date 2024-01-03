import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'compass-course-card',
  inputs: ['data'],
  templateUrl: './compass-course-card.component.html',
  styleUrls: ['./compass-course-card.component.scss']
})
export class CompassCourseCardComponent implements OnInit {

  @Input() data: object;
  @Input() showIcon: boolean = true;
  @Output() courseCardClicked = new EventEmitter<any>();
  @Output() favoriteIconClicked = new EventEmitter<string>()
  name: string;
  category: string;
  image: string = "/assets/images/course-1.png";
  showProgress: boolean = false;
  completionPercentage: any;
  contentType: string;
  duration: string;
  primaryCategory: string;
  //Change this if capturing from api
  isWishListed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.data["enrolledDate"] == undefined && this.data["status"] == undefined) {
      this.name = this.data['name'];
      if (this.data["competencyIdsMapping"] !== undefined) {
        if (this.data["competencyIdsMapping"].length > 0) {
          this.category = this.data['competencyIdsMapping'][0];
        }
      }
      if (this.data['posterImage'] !== undefined) {
        this.image = this.data['posterImage'];
      }
      this.contentType = this.data['contentType'];
      this.primaryCategory = this.data['primaryCategory'];
      if (this.data['Duration'] !== undefined) {
        this.duration = this.data['Duration'];
      }
      // this.category = this.data['targetTaxonomyCategory4Ids'][0];
    } else {
      if(this.data["content"]){
        if (this.data['completionPercentage'] > 0) {
          this.showProgress = true;
        }
        this.name = this.data['courseName'];
        if (this.data['content']["competencyIdsMapping"] !== undefined) {
          if (this.data['content']['competencyIdsMapping'].length > 0) {
            this.category = this.data['content']['competencyIdsMapping'][0];
          }
        }
        if (this.data['content']['posterImage'] !== undefined) {
          this.image = this.data['content']['posterImage'];
        }
        if (this.data['completionPercentage'] !== undefined) {
          this.completionPercentage = this.data['completionPercentage'];
        }
        this.contentType = this.data['content']['contentType'];
        this.primaryCategory = this.data['content']['primaryCategory'];
        if (this.data['content']['Duration'] !== undefined) {
          this.duration = this.data['content']['Duration'];
        }
        // this.category = this.data['content']['targetTaxonomyCategory4Ids'][0];
      } else {
        this.name = this.data['name'];
      if (this.data["competencyIdsMapping"] !== undefined) {
        if (this.data["competencyIdsMapping"].length > 0) {
          this.category = this.data['competencyIdsMapping'][0];
        }
      }
      if (this.data['posterImage'] !== undefined) {
        this.image = this.data['posterImage'];
      }
      this.contentType = this.data['contentType'];
      this.primaryCategory = this.data['primaryCategory'];
      if (this.data['Duration'] !== undefined) {
        this.duration = this.data['Duration'];
      }
      // this.category = this.data['targetTaxonomyCategory4Ids'][0];
      }
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
    if (!percentage) {
      return 'Not started'
    }
    if (percentage == 0) {
      return 'Not started'
    } else if (percentage == 100) {
      return 'Completed'
    } else {
      return percentage + '% completed'
    }
  }

  cardClicked() {
    if (!(event.target as HTMLElement).classList.contains('mat-icon')) {
      this.courseCardClicked.emit();
    }
  }

  onWishList(option: string) {
    event.stopPropagation();
    this.isWishListed = !this.isWishListed;
    this.favoriteIconClicked.emit(option);
  }
}
