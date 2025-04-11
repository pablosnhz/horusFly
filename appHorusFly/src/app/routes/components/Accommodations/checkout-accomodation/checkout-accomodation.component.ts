import { Component, Input, numberAttribute } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccomodationsService } from '../../services/accomodations.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-accomodation',
  templateUrl: './checkout-accomodation.component.html',
  styleUrls: ['./checkout-accomodation.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class CheckoutAccomodationComponent {
  @Input({ transform: numberAttribute }) idHotels!: number;

  infoHotel$!: Observable<any>;
  $user = this.authService.$user;
  dataIn!: string;
  dataOut!: string;
  totalPrice: number = 0;

  form!: FormGroup;
  hotelData!: any;

  submited: boolean = false;

  constructor(
    private acService: AccomodationsService,
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
      personsRoom: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.infoHotel$ = this.acService.getInfoHotel().pipe(
      map((data) => {
        const hotel = data.value.find((hotel: any) => hotel.idHotel === this.idHotels);
        this.hotelData = hotel;
        return hotel;
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
        city: this.hotelData.city,
        country: this.hotelData.country,
        name: this.hotelData.name,
      },
    };
    let combinacionArray = JSON.parse(sessionStorage.getItem('formAcomoda') || '[]');

    const exists = combinacionArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(formCombined),
    );

    if (!exists) {
      combinacionArray.push(formCombined);
      sessionStorage.setItem('formAcomoda', JSON.stringify(combinacionArray));
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
