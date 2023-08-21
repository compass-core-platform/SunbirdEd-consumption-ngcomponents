import { Component, OnInit } from '@angular/core';
const INFO_DATA = [
      { selector: '<info-card> </info-card>', input:"{ imgUrl:string, data:{ position:string, title: string, text: string}}" }
    ];
const REG_BTN_DATA = [
  { 
      selector:'<register-btn-card></register-btn-card>',
      input: "{imgUrl:string, title:string, content:string, button:{ type:string, text:string }}"
  }
];
const EXPLORE_DATA = [
  { 
      selector:'<explore-compass-card></explore-compass-card>',
      input: "{iconUrl:string, title:string, content:string}"
  }
];
const SUMMARY_DATA = [
  { 
      selector:'<summary-card></summary-card>',
      input: "{iconUrl:string, title:string, count:string, commonIconUrl:string}"
  }
];
const BROWSE_BY_DATA = [
  {
    selector: '<browse-by-card></browse-by-card>',
    input: "{iconUrl:string, title:string}"
  }
];
const FOOTER_DATA = [
  {
    selector: '<main-footer></main-footer>',
    input: "{ links: any[],logoLink: string,footerText: string}"
  }
];
@Component({
  selector: 'app-compass-landing-page',
  templateUrl: './compass-landing-page.component.html',
  styleUrls: ['./compass-landing-page.component.scss']
})
export class CompassLandingPageComponent implements OnInit {
  displayedColumns: string[] = ['selector', 'input'];
  dataSource = INFO_DATA;
  regDataSource = REG_BTN_DATA;
  browseByDataSource = BROWSE_BY_DATA;
  exploreCardDataSource = EXPLORE_DATA;
  summaryDataSource = SUMMARY_DATA;
  footerDataSource = FOOTER_DATA;
  landingPageData = {
    cardsData: {
        imageUrl: "assets/common-consumption/images/info-card_1.jpg",
        data: {
          position: "right",
          title: "HR Drives Government Goal Achievement",
          text: "Aligned HR practices with government goals motivate and engage employees, resulting in improved performance. For quality education, HR hires qualified teachers, provides professional development, and fosters positive work environments."
        }
      },
      regCardData: {
        imgUrl: "assets/common-consumption/images/reg-button-bg.svg",
        title:"Register for a Successful Government Experience",
        content: "Register now for a successful government experience. Join a community driving positive change.",
        button: {
          type:"com-primary-btn",
          text:"Register"
         }
    },
    summaryCardData: {
      iconUrl: "assets/common-consumption/images/courses.svg",
      title: "Courses",
      count: "1000+",
      commonIconUrl: "assets/common-consumption/images/arrow.svg"
    },
    exploreData: {
      iconUrl: "assets/common-consumption/images/group24.png",
      title: "Learn",
      content: "Sharpen your skills with hundreds-of online courses",
    },
    footerData: {
      links: ["Learn", "Connections", "Discussion", "Jobs", "Competencies", "Events"],
      logoLink: "assets/common-consumption/images/Logo-ss-white.png",
      footerText: "2022 Copyright [Company Name]"
    },
    browseData: {
      iconUrl: "assets/common-consumption/images/topic.png",
      title: "Topic"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
