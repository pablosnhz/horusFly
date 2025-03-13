import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-flights-slider',
  templateUrl: './flights-slider.component.html',
  styleUrls: ['./flights-slider.component.scss'],
})
export class FlightsSliderComponent implements OnInit {
  constructor(private flightsService: FlightsService) {}
  data: any;

  ngOnInit(): void {
    this.obteniendoDatos();
  }

  obteniendoDatos() {
    this.flightsService.getDatos().subscribe((datos) => {
      this.data = datos.value;
      console.log(`datos para flights`, datos.value);
    });
  }
}
