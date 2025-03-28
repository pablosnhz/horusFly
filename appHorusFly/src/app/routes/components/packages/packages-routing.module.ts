import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { DetailPackagesComponent } from './detail-packages/detail-packages.component';

const routes: Routes = [
  {
    path: '',
    component: PackagesComponent,
  },
  {
    path: ':idDiscount',
    component: DetailPackagesComponent,
  },
  {
    path: ':idPackages',
    component: DetailPackagesComponent,
  },
  {
    path: ':idCombo',
    component: DetailPackagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule {}
