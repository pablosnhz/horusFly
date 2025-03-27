import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AccomodationsService } from '../../services/accomodations.service';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-checkout-flights',
  templateUrl: './checkout-flights.component.html',
  styleUrls: ['./checkout-flights.component.scss'],
})
export class CheckoutFlightsComponent implements OnInit {
  @Input({ transform: numberAttribute }) idFlights!: number;

  infoFlights$!: Observable<any>;
  $user = this.authService.$user;
  dataIn!: string;
  dataOut!: string;
  totalPrice: number = 0;

  form!: FormGroup;
  flyData!: any;

  submited: boolean = false;

  constructor(
    private flyService: FlightsService,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      dataIn: ['', Validators.required],
      dataOut: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      personsCount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.infoFlights$ = this.flyService.getDatos().pipe(
      map((data) => {
        console.log('response data', data);

        const fly = data.value.find((flyList: any) => flyList.idVuelo === this.idFlights);
        this.flyData = fly;
        return fly;
      }),
    );

    this.form.valueChanges.subscribe((value) => {
      this.dataIn = value.dataIn;
      this.dataOut = value.dataOut;
      this.calculatedTotal();
    });
  }

  formDatos() {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    const formCombined = {
      form: this.form.value,
      total: this.totalPrice,
      hotel: {
        city: this.flyData.city,
        country: this.flyData.country,
        name: this.flyData.name,
      },
    };
    let combinacionArray = JSON.parse(sessionStorage.getItem('form') || '[]');

    const exists = combinacionArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(formCombined),
    );

    if (!exists) {
      combinacionArray.push(formCombined);
      sessionStorage.setItem('form', JSON.stringify(combinacionArray));
    }

    this.form.reset();
  }

  calculatedTotal(hotel?: any) {
    const dateIn = this.form.get('dataIn')?.value;
    const dateOut = this.form.get('dataOut')?.value;

    if (dateIn && dateOut && hotel) {
      const dateGo = new Date(dateIn);
      const dateReturn = new Date(dateOut);
      const timeDif = dateReturn.getTime() - dateGo.getTime();
      const daysDif = Math.ceil(timeDif / (1000 * 60 * 60 * 24));

      this.totalPrice = daysDif * hotel.price + 40.0;
    }
  }
}
