import { Routes } from '@angular/router';
import { accommodationsComponent } from './accommodations.component';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';
import { CheckoutAccomodationComponent } from './checkout-accomodation/checkout-accomodation.component';

export const AC_ROUTES: Routes = [
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
