import { Component, OnInit } from '@angular/core';
const COMPETENCY_DATA = [
  { selector: '<sb-popular-card> </sb-popular-card>', input:"{ title:string, type: string, icon: string, noOfCources: number}" }
];

const TOPICS_DATA = [
  { selector: '<sb-popular-card> </sb-popular-card>', input:"{ name: string}" }
];

@Component({
  selector: 'app-lern-landing-page',
  templateUrl: './lern-landing-page.component.html',
  styleUrls: ['./lern-landing-page.component.scss']
})
export class LernLandingPageComponent implements OnInit {
  displayedColumns: string[] = ['selector', 'input'];
  competencyDataSource = COMPETENCY_DATA;
  topicsDataSource = TOPICS_DATA;

  competencyData = {
    title: "Floor Planning and Mapping",
    type: "",
    icon: "assets/images/course.svg",
    description: "Creating plans for the floor and layout blueprints",
    noOfCourses: 6,
    btnText : "View courses",
    expand : true,
    associatedCoursesTxt: "Associated courses",    
    expandData: [{"trackable":{"enabled":"Yes","autoBatch":"Yes"},"identifier":"do_113954360830550016125","targetTaxonomyCategory4Ids":["fracing_fw_taxonomycategory4_787bb123-3926-4226-a866-1a51d7ae98b3"],"channel":"0138325860604395527","organisation":["compass"],"Duration":"02:00:00","mimeType":"application/vnd.ekstep.content-collection","posterImage":"https://storageco.blob.core.windows.net/content-storage/content/do_1139111177289891841219/artifact/do_1139111177289891841219_1698134488590_cricket.jpg","pkgVersion":1,"objectType":"Content","appIcon":"https://storageco.blob.core.windows.net/content-storage/collection/do_113954360830550016125/artifact/do_1139111177289891841219_1698134488590_cricket.thumb.jpg","lastPublishedOn":"2023-12-24T10:21:53.737+0000","primaryCategory":"Course","name":"Sustainable Agriculture Practices","avgRating":4,"contentType":"Course","resourceType":"Course"},{"trackable":{"enabled":"Yes","autoBatch":"Yes"},"identifier":"do_113953167252176896122","targetTaxonomyCategory4Ids":["fracing_fw_taxonomycategory4_competencies_c"],"channel":"0138325860604395527","organisation":["compass"],"Duration":"02:00:00","mimeType":"application/vnd.ekstep.content-collection","pkgVersion":1,"objectType":"Content","appIcon":"","lastPublishedOn":"2023-12-22T17:52:55.299+0000","primaryCategory":"Course","name":"Permaculture Principles","contentType":"Course","resourceType":"Course"}]
  }

  topicsData = {
    name: "COVID 19"
  }

    
  constructor() { }

  ngOnInit(): void {
  }

}
