import { Component, inject, OnInit, Signal } from '@angular/core';
import { AccomodationsService } from '../../services/accomodations.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/shared/pages/spinner/spinner.component';
import { RatingDirective } from 'src/app/core/directive/rating.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, SpinnerComponent, RatingDirective, RouterLink],
})
export class AccomodationSliderComponent implements OnInit {
  acService = inject(AccomodationsService);

  $loading: Signal<boolean> = this.acService.$loading;
  resultsFilters = this.acService.resultsFilters;

  ngOnInit(): void {
    this.acService.getInfoHotel().subscribe();
  }

  // obteniendoDatos() {
  //   this.acService.getInfoHotel().subscribe((datos) => {
  //     this.data = datos.value;
  //     // console.log(`obteniendo lista de hoteles`, datos.value);
  //   });
  // }
}
