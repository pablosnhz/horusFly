import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';
import { PackagesRoutingModule } from './packages-routing.module';
import { AccommodationsModule } from '../Accommodations/accommodations.module';

@NgModule({
  declarations: [PackagesComponent,],
  imports: [
    CommonModule,
    PackagesRoutingModule,
  ]
})
export class PackagesModule { }
