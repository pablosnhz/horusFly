import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlightsComponent } from './flights.component';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { CheckoutFlightsComponent } from './checkout-flights/checkout-flights.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [FlightsComponent, FlightsSliderComponent, CheckoutFlightsComponent],
  imports: [CommonModule, FlightsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class FlightsModule {}
