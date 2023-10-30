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
    expandData: [{"ownershipType":["createdBy"],"publish_type":"public","copyright":"compass","keywords":["ElevatorQuestionnaire","Elevators","Lifts","DisasterManagement","LiftInstallation"],"targetTaxonomyCategory4Ids":["fracing_fw_taxonomycategory4_787bb123-3926-4226-a866-1a51d7ae98b3","fracing_fw_taxonomycategory4_competencies_a","fracing_fw_taxonomycategory4_competencies_d","fracing_fw_taxonomycategory4_competencies_f"],"channel":"0138325860604395527","downloadUrl":"https://storageco.blob.core.windows.net/content-storage/content/do_1139077567460966401144/lift-installation-guide-and-monitoring_1697724469789_do_1139077567460966401144_1_SPINE.ecar","organisation":["compass"],"language":["English"],"mimeType":"application/vnd.ekstep.content-collection","variants":{"spine":{"ecarUrl":"https://storageco.blob.core.windows.net/content-storage/content/do_1139077567460966401144/lift-installation-guide-and-monitoring_1697724469789_do_1139077567460966401144_1_SPINE.ecar","size":"23495"},"online":{"ecarUrl":"https://storageco.blob.core.windows.net/content-storage/content/do_1139077567460966401144/lift-installation-guide-and-monitoring_1697724469881_do_1139077567460966401144_1_ONLINE.ecar","size":"7686"}},"leafNodes":["do_1139077203621396481109","do_113907722090217472137","do_1139077211962408961110"],"objectType":"Content","appIcon":"https://storageco.blob.core.windows.net/content-storage/collection/do_1139077567460966401144/artifact/do_1139077516072960001141_1697723584996_lift-maintenance-service-cochin.thumb.jpg","primaryCategory":"Course","appId":"dev.dev.portal","contentEncoding":"gzip","lockKey":"b536514e-66b5-47b3-8518-577da35dba54","generateDIALCodes":"No","totalCompressedSize":3913862,"mimeTypesCount":"{\"application/pdf\":1,\"application/vnd.sunbird.questionset\":1,\"video/mp4\":1,\"application/vnd.ekstep.content-collection\":3}","contentType":"Course","trackable":{"enabled":"Yes","autoBatch":"Yes"},"identifier":"do_1139077567460966401144","audience":["Student"],"toc_url":"https://storageco.blob.core.windows.net/content-storage/content/do_1139077567460966401144/artifact/do_1139077567460966401144_toc.json","visibility":"Default","contentTypesCount":"{\"Resource\":2,\"CourseUnit\":3,\"\":1}","author":"CompassCreator","consumerId":"5df135c9-13cd-4f45-94af-8a9f2aa410ad","childNodes":["do_1139077211962408961110","do_1139077575349043201145","do_1139077203621396481109","do_1139077579175034881147","do_113907722090217472137","do_1139077582074675201149"],"discussionForum":{"enabled":"Yes"},"mediaType":"content","Duration":"4 Mins","osId":"org.ekstep.quiz.app","graph_id":"domain","nodeType":"DATA_NODE","lastPublishedBy":"559a71b2-77ba-4b1f-add3-94a26959febc","version":2,"license":"CC BY 4.0","size":23495,"lastPublishedOn":"2023-10-19T14:07:49.571+0000","name":"Lift Installation Guide and Monitoring","attributions":[],"status":"Live","code":"org.sunbird.njheaY","credentials":{"enabled":"Yes"},"prevStatus":"Processing","description":"Important lessons to keep in mind while installing the lifts at buildings","posterImage":"https://storageco.blob.core.windows.net/content-storage/content/do_1139077516072960001141/artifact/do_1139077516072960001141_1697723584996_lift-maintenance-service-cochin.jpg","idealScreenSize":"normal","createdOn":"2023-10-19T14:03:32.174+0000","batches":[{"createdFor":["0138325860604395527"],"endDate":null,"name":"Lift Installation Guide and Monitoring","enrollmentType":"open","batchId":"01390776604777676818","enrollmentEndDate":null,"startDate":"2023-10-19","status":1}],"copyrightYear":2023,"contentDisposition":"inline","lastUpdatedOn":"2023-10-19T14:07:49.953+0000","dialcodeRequired":"No","targetTaxonomyCategory5Ids":["fracing_fw_taxonomycategory5_competencies_level_1"],"createdFor":["0138325860604395527"],"creator":"CompassCreator","os":["All"],"se_FWIds":["fracing_fw"],"targetFWIds":["fracing_fw"],"pkgVersion":1,"versionKey":"1697724410392","idealScreenDensity":"hdpi","depth":0,"s3Key":"content/do_1139077567460966401144/artifact/do_1139077567460966401144_toc.json","lastSubmittedOn":"2023-10-19T14:06:50.388+0000","createdBy":"1fc08c1b-39bb-4b53-a25d-12bf9ef99e4f","compatibilityLevel":4,"leafNodesCount":3,"userConsent":"Yes","resourceType":"Course","node_id":4729,"competencyIdsMapping":["Floor Inspection","Floor Planning and Mapping","Assessment Documentations","Land Inspection Blueprint"],"orgDetails":{"orgName":"compass"}},{"trackable":{"enabled":"Yes","autoBatch":"Yes"},"identifier":"do_1139083018079518721180","targetTaxonomyCategory4Ids":["fracing_fw_taxonomycategory4_787bb123-3926-4226-a866-1a51d7ae98b3"],"channel":"0138325860604395527","organisation":["compass"],"Duration":"01:20:00","mimeType":"application/vnd.ekstep.content-collection","posterImage":"https://storageco.blob.core.windows.net/content-storage/content/do_113906126657847296174/artifact/do_113906126657847296174_1697525227335_cad.jpg","pkgVersion":1,"objectType":"Content","appIcon":"https://storageco.blob.core.windows.net/content-storage/collection/do_1139083018079518721180/artifact/do_113906126657847296174_1697525227335_cad.thumb.jpg","lastPublishedOn":"2023-10-26T05:20:40.416+0000","primaryCategory":"Assessment","name":"AutoCad Exam","contentType":"Course","resourceType":"Collection","orgDetails":{"orgName":"compass"}}]
  }

  topicsData = {
    name: "COVID 19"
  }

    
  constructor() { }

  ngOnInit(): void {
  }

}
