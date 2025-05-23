import { Component, Input, numberAttribute, OnInit, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AccomodationsService } from '../../services/accomodations.service';
import { FlightsService } from '../../services/flights.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IFlights } from 'src/app/core/models/flights';

@Component({
  selector: 'app-checkout-flights',
  templateUrl: './checkout-flights.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  styleUrls: ['./checkout-flights.component.scss'],
})
export class CheckoutFlightsComponent implements OnInit {
  @Input({ transform: numberAttribute }) idFlights!: number;

  infoFlights$!: Observable<IFlights>;
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
      dataOut: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      personsCount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.infoFlights$ = this.flyService.getDatosFlights().pipe(
      map((data) => {
        // console.log('response data', data);

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

  formDatosFly() {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    const formCombined = {
      form: this.form.value,
      total: this.totalPrice,
      fly: {
        airline: this.flyData.airline,
        airplaneIcon: this.flyData.airplaneIcon,
        suitcases: this.flyData.suitcases,
        fromCity: this.flyData.fromCity,
        toCity: this.flyData.toCity,
      },
    };
    // console.log('formDatos', formCombined);

    let combinacionArray = JSON.parse(sessionStorage.getItem('formFly') || '[]');

    const exists = combinacionArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(formCombined),
    );

    if (!exists) {
      combinacionArray.push(formCombined);
      sessionStorage.setItem('formFly', JSON.stringify(combinacionArray));
    }

    this.form.reset();
  }

  calculatedTotal(fly?: any) {
    const dateIn = this.form.get('dataIn')?.value;
    const dateOut = this.form.get('dataOut')?.value;

    if (!fly || !dateIn) return;

    if (dateOut) {
      this.totalPrice = fly.price * 2 + 50.0;
    } else {
      this.totalPrice = fly.price + 50.0;
    }
  }

  // para el caso de que fly.tocity este o no, hacemos un condicional de la validacion
  ngOnChanges(changes: SimpleChanges) {
    if (changes['flyList']) {
      this.validatorForToCity();
    }
  }

  validatorForToCity() {
    if (this.flyData.toCity) {
      this.form.get('dataOut')?.setValidators(Validators.required);
    } else {
      this.form.get('dataOut')?.clearValidators();
    }
    this.form.get('dataOut')?.updateValueAndValidity();
  }
}
