import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsRoutingModule } from './accommodations-routing.module';
import { PackagesSliderComponent } from '../packages/packages-slider/packages-slider.component';



@NgModule({
  declarations: [PackagesSliderComponent],
  imports: [
    CommonModule,
    AccommodationsRoutingModule
  ],
  exports: [
    PackagesSliderComponent
  ]
})
export class AccommodationsModule { }
