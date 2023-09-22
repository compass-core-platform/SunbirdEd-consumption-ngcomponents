import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toc-content',
  templateUrl: './toc-content.component.html',
  styleUrls: ['./toc-content.component.scss']
})
export class TocContentComponent implements OnInit {
  progress = 100;
  duration = '24m';
  
  constructor() { }

  ngOnInit(): void {
  }

  courseModules = {
    
  }

}
