import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface footerData {
  links: any[];
  logoLink: string;
  footerText: string;
}

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  @Input() footerData: footerData;

  constructor() { }

  ngOnInit(): void {
  }

}
