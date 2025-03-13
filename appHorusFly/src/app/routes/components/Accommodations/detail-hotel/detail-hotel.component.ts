import { Component, Input, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import { AccomodationsService } from '../../services/accomodations.service';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.scss'],
})
export class DetailHotelComponent {
  @Input({ transform: numberAttribute }) id!: number;

  constructor(private acService: AccomodationsService) {}

  infoHotel$: Observable<any> = this.acService.getInfo();
}
