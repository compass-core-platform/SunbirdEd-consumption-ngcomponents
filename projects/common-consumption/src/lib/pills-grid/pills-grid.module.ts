import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsGridComponent } from './pills-grid/pills-grid.component';
import { PillItemComponent } from './pill-item/pill-item.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    PillsGridComponent,
    PillItemComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    PillsGridComponent,
    PillItemComponent
  ]
})
export class PillsGridModule {}
