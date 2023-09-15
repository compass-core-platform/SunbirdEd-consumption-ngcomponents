import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {
  @Input() levelsInfo: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
