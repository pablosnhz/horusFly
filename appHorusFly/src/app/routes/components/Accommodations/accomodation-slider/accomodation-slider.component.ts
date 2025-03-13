import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccomodationsService } from '../../services/accomodations.service';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccomodationSliderComponent implements OnInit {
  constructor(
    private acService: AccomodationsService,
    private router: Router,
  ) {}

  // @Input() data: any;
  data: any;

  ngOnInit(): void {
    this.obteniendoDatos();
  }

  // navigateToProductDetails(): void {
  //   this.router.navigate(['accommodation', 'hotel', this.data.id]);
  // }

  obteniendoDatos() {
    this.acService.getInfo().subscribe((datos) => {
      this.data = datos.value;
      console.log(`obteniendo lista de hoteles`, datos.value);
    });
  }
}
