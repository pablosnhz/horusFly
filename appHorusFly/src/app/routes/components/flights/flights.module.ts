import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';

import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [FlightsComponent, FlightsSliderComponent],
  imports: [CommonModule, FlightsRoutingModule, SharedModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class FlightsModule {}
