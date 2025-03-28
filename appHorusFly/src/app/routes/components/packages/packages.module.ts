import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesSliderComponent } from './packages-slider/packages-slider.component';
import { AppModule } from 'src/app/app.module';
import { register } from 'swiper/element/bundle';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';
import { DiscountSliderComponent } from './discount-slider/discount-slider.component';
import { DetailPackagesComponent } from './detail-packages/detail-packages.component';
register();

@NgModule({
  declarations: [
    PackagesComponent,
    PackagesSliderComponent,
    FlightsSliderComponent,
    DiscountSliderComponent,
    DetailPackagesComponent,
  ],
  imports: [CommonModule, PackagesRoutingModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesModule {}
