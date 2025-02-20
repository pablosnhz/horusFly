import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesSliderComponent } from './packages-slider/packages-slider.component';
import { AppModule } from 'src/app/app.module';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    PackagesComponent,
    PackagesSliderComponent,
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PackagesModule { }
