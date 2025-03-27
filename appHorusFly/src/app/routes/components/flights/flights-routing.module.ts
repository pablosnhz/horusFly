import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { CheckoutFlightsComponent } from './checkout-flights/checkout-flights.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
  },
  {
    path: 'checkout/:idFlights',
    component: CheckoutFlightsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
