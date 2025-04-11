import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationComponent } from 'src/app/shared/pages/destination/destination.component';
import { AccomodationSliderComponent } from './accomodation-slider/accomodation-slider.component';

@Component({
  selector: 'app-lodging',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss'],
  standalone: true,
  imports: [DestinationComponent, AccomodationSliderComponent],
})
export class accommodationsComponent {}
