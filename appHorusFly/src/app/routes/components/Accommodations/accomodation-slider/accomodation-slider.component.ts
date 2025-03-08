import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/core/services/testService/test.service';

@Component({
  selector: 'app-accomodation-slider',
  templateUrl: './accomodation-slider.component.html',
  styleUrls: ['./accomodation-slider.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccomodationSliderComponent implements OnInit {
  constructor(
    private testService: TestService,
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
    this.testService.getInfo().subscribe((datos) => {
      this.data = datos.value;
      console.log(`obteniendo lista de hoteles`, datos.value);
    });
  }
}
