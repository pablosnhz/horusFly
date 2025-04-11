import { Component, effect, inject, OnInit, Signal } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/shared/pages/spinner/spinner.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-flights-slider',
  templateUrl: './flights-slider.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent, RouterLink],
  styleUrls: ['./flights-slider.component.scss'],
})
export class FlightsSliderComponent {
  flightsService = inject(FlightsService);
  $loadingFlights: Signal<boolean> = this.flightsService.$loading;
  resultsFiltersFly = this.flightsService.resultsFiltersFlights;

  data: Signal<any[]> = toSignal(
    this.flightsService.getDatosFlights().pipe(map((response) => response.value || [])),
    { initialValue: [] },
  );

  constructor() {
    // escuchamos los cambios con el effect
    effect(() => {
      // console.log('Datos de hoteles:', this.data());
    });
  }
}
