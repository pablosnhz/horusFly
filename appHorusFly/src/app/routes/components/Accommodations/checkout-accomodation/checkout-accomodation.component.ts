import { Component, Input, numberAttribute } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccomodationsService } from '../../services/accomodations.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-checkout-accomodation',
  templateUrl: './checkout-accomodation.component.html',
  styleUrls: ['./checkout-accomodation.component.scss'],
})
export class CheckoutAccomodationComponent {
  @Input({ transform: numberAttribute }) idHotels!: number;

  infoHotel$!: Observable<any>;
  $user = this.authService.$user;
  dataIn!: string;
  dataOut!: string;
  totalPrice: number = 0;

  constructor(
    private acService: AccomodationsService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.infoHotel$ = this.acService
      .getInfo()
      .pipe(map((data) => data.value.find((hotel: any) => hotel.idHotel === this.idHotels)));
  }

  calculatedTotal(hotel: any) {
    if (this.dataIn && this.dataOut) {
      const dateGo = new Date(this.dataIn);
      const dateReturn = new Date(this.dataOut);
      const timeDif = dateReturn.getTime() - dateGo.getTime();
      const daysDif = Math.ceil(timeDif / (1000 * 60 * 60 * 24));
      this.totalPrice = daysDif * hotel.price;
    }
  }
}
