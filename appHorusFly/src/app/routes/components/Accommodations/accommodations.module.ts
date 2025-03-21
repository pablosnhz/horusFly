import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsRoutingModule } from './accommodations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { accommodationsComponent } from './accommodations.component';
import { AccomodationSliderComponent } from './accomodation-slider/accomodation-slider.component';
import { RatingDirective } from 'src/app/core/directive/rating.directive';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';
import { register } from 'swiper/element/bundle';
import { CheckoutAccomodationComponent } from './checkout-accomodation/checkout-accomodation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
register();

@NgModule({
  declarations: [
    AccomodationSliderComponent,
    accommodationsComponent,
    RatingDirective,
    DetailHotelComponent,
    CheckoutAccomodationComponent,
  ],
  imports: [
    CommonModule,
    AccommodationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccommodationsModule {}
