import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsRoutingModule } from './accommodations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { accommodationsComponent } from './accommodations.component';
import { AccomodationSliderComponent } from './accomodation-slider/accomodation-slider.component';
import { RatingDirective } from 'src/app/core/directive/rating.directive';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';

@NgModule({
  declarations: [AccomodationSliderComponent, accommodationsComponent, RatingDirective, DetailHotelComponent],
  imports: [CommonModule, AccommodationsRoutingModule, SharedModule],
})
export class AccommodationsModule {}
