import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotsComponent } from './slots.component';


@NgModule({
  declarations: [SlotsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SlotsComponent,
  ]
})
export class SlotsModule { }
