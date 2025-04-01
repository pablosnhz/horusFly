import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { DetailPackagesComponent } from './detail-packages/detail-packages.component';
import { CheckoutPackagesComponent } from './checkout-packages/checkout-packages.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule {}
