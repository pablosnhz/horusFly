import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PackagesSliderComponent } from './packages-slider/packages-slider.component';
import { FlightsSliderComponent } from './flights-slider/flights-slider.component';
import { DiscountSliderComponent } from './discount-slider/discount-slider.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PackagesSliderComponent,
    FlightsSliderComponent,
    DiscountSliderComponent,
  ],
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  sectionScroll(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
