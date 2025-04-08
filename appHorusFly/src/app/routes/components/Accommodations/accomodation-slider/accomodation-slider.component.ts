import { Component, OnInit, Signal } from '@angular/core';
import { AccomodationsService } from '../../services/accomodations.service';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
})
export class AccomodationSliderComponent implements OnInit {
  $loading: Signal<boolean> = this.acService.$loading;
  resultsFilters = this.acService.resultsFilters;

  constructor(private acService: AccomodationsService) {}

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
