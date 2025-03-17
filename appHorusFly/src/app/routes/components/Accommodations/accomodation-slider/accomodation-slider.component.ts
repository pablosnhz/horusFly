import { ChangeDetectionStrategy, Component, Input, OnInit, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { AccomodationsService } from '../../services/accomodations.service';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccomodationSliderComponent implements OnInit {
  $loading: Signal<boolean> = this.acService.$loading;
  data: any;

  constructor(
    private acService: AccomodationsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.obteniendoDatos();
  }

  obteniendoDatos() {
    this.acService.getInfo().subscribe((datos) => {
      this.data = datos.value;
      console.log(`obteniendo lista de hoteles`, datos.value);
    });
  }
}
