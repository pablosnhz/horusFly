import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/services/testService/test.service';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
})
export class AccomodationSliderComponent implements OnInit {
  constructor(private testService: TestService) {}

  data: any;

  ngOnInit(): void {
    this.obteniendoDatos();
  }

  obteniendoDatos() {
    this.testService.getInfo().subscribe((datos) => {
      this.data = datos.value;
      console.log(`obteniendo lista de hoteles`, datos.value);
    });
  }
}
