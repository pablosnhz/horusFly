import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightsSliderComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,

    SharedModule,
  ]
})
export class FlightsModule { }
