import { Component, OnInit, Input } from '@angular/core';
import { cardInfo } from '../models';
@Component({
  selector: 'sb-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() data: cardInfo;
  @Input() pillName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
