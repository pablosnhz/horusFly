import { Routes } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { CheckoutFlightsComponent } from './checkout-flights/checkout-flights.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    component: FlightsComponent,
  },
  {
    path: 'checkout/:idFlights',
    component: CheckoutFlightsComponent,
  },
];

//   providers: [{ provide: LOCALE_ID, useValue: 'es' }],
// })
// export class FlightsModule {}
