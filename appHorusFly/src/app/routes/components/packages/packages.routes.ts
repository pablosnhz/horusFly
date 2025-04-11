import { Routes } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { register } from 'swiper/element/bundle';
import { DetailPackagesComponent } from './detail-packages/detail-packages.component';
import { CheckoutPackagesComponent } from './checkout-packages/checkout-packages.component';
register();

export const PACKAGES_ROUTES: Routes = [
  {
    path: '',
    component: PackagesComponent,
  },
  {
    path: 'combo/:idCombo',
    component: DetailPackagesComponent,
  },
  {
    path: 'combo/:idCombo/checkout',
    component: CheckoutPackagesComponent,
  },
  {
    path: 'paquetes/:idPackages',
    component: DetailPackagesComponent,
  },
  {
    path: 'paquetes/:idPackages/checkout',
    component: CheckoutPackagesComponent,
  },
  {
    path: 'discount/:idDiscount',
    component: DetailPackagesComponent,
  },
  {
    path: 'discount/:idDiscount/checkout',
    component: CheckoutPackagesComponent,
  },
];
