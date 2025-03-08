import { Component, Input, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/core/services/testService/test.service';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.scss'],
})
export class DetailHotelComponent {
  @Input({ transform: numberAttribute }) id!: number;

  constructor(private testService: TestService) {}

  infoHotel$: Observable<any> = this.testService.getInfo();
}
