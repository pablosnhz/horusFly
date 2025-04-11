import { Component } from '@angular/core';
import { DestinationComponent } from 'src/app/shared/pages/destination/destination.component';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  standalone: true,
  imports: [DestinationComponent, FlightsSliderComponent],
})
export class FlightsComponent {}
