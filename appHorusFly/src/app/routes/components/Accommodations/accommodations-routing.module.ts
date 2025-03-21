import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accommodationsComponent } from './accommodations.component';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';
import { CheckoutAccomodationComponent } from './checkout-accomodation/checkout-accomodation.component';

const routes: Routes = [
  {
    path: '',
    component: accommodationsComponent,
  },
  {
    path: ':idHotels',
    component: DetailHotelComponent,
  },
  {
    path: ':idHotels/checkout',
    component: CheckoutAccomodationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationsRoutingModule {}
