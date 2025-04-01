import { Component, Input, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PackagesService } from '../../services/packages.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-checkout-packages',
  templateUrl: './checkout-packages.component.html',
  styleUrls: ['./checkout-packages.component.scss'],
})
export class CheckoutPackagesComponent {
  @Input({ transform: numberAttribute }) idPackages!: number;
  @Input({ transform: numberAttribute }) idCombo!: number;
  @Input({ transform: numberAttribute }) idDiscount!: number;

  infoPackages$!: Observable<any>;
  infoCombo$!: Observable<any>;
  infoDiscount$!: Observable<any>;

  $user = this.authService.$user;
  dataIn!: string;
  dataOut!: string;
  totalPrice: number = 0;

  form!: FormGroup;
  packagesData!: any;
  packagesComboData!: any;
  packagesDiscountData!: any;

  minDateOut!: string;
  maxDateOut!: string;

  submited: boolean = false;

  constructor(
    private packageService: PackagesService,
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
    this.infoPackages$ = this.packageService.obtenerPackages().pipe(
      map((data) => {
        const packagesData = data.value.find(
          (packagesId: any) => packagesId.id === this.idPackages,
        );
        this.packagesData = packagesData;
        return packagesData;
      }),
    );

    this.infoCombo$ = this.packageService.obtenerFlights().pipe(
      map((data) => {
        const packagesDataCombo = data.value.find(
          (packagesDataComboId: any) => packagesDataComboId.id === this.idCombo,
        );
        console.log('datos de checkout COMBO', data);

        this.packagesComboData = packagesDataCombo;
        return packagesDataCombo;
      }),
    );

    this.infoDiscount$ = this.packageService.obtenerDiscount().pipe(
      map((data) => {
        const packagesDataDiscount = data.value.find(
          (packagesDataDiscountId: any) => packagesDataDiscountId.id === this.idDiscount,
        );
        this.packagesComboData = packagesDataDiscount;
        return packagesDataDiscount;
      }),
    );

    // hacemos la deteccion del calculatedTotal que no da el valor final del price
    this.form
      .get('dataIn')
      ?.valueChanges.subscribe(() =>
        this.calculatedTotal(
          this.packagesData | this.packagesComboData | this.packagesDiscountData,
        ),
      );
    this.form
      .get('dataOut')
      ?.valueChanges.subscribe(() =>
        this.calculatedTotal(
          this.packagesData | this.packagesComboData | this.packagesDiscountData,
        ),
      );
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
        type: this.packagesData.comboType,
        country: this.packagesData.destinations,
        hotels: this.packagesData.hotel,
        minDays: this.packagesData.minDays,
        maxDays: this.packagesData.maxDays,
        includes: this.packagesData.includes,
      },
    };
    let combinacionArray = JSON.parse(sessionStorage.getItem('formPackages') || '[]');
    let combinacionArrayCombo = JSON.parse(sessionStorage.getItem('formCombo') || '[]');
    let combinacionArrayDiscount = JSON.parse(sessionStorage.getItem('formDiscount') || '[]');

    const exists = combinacionArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(formCombined),
    );

    if (!exists) {
      combinacionArray.push(formCombined);
      sessionStorage.setItem('formPackages', JSON.stringify(combinacionArray));
    }
    if (!exists) {
      combinacionArrayCombo.push(formCombined);
      sessionStorage.setItem('formCombo', JSON.stringify(combinacionArrayCombo));
    }
    if (!exists) {
      combinacionArrayDiscount.push(formCombined);
      sessionStorage.setItem('formDiscount', JSON.stringify(combinacionArrayDiscount));
    }

    this.form.reset();
  }

  calculatedTotal(hotel?: any) {
    const dateIn = this.form.get('dataIn')?.value;
    const dateOutControl = this.form.get('dataOut');

    if (!dateIn || !hotel) return;

    const minDays = hotel.minDays ?? 1;
    const maxDays = hotel.maxDays ?? 30;

    const dateGo = new Date(dateIn);

    const minDateOut = new Date(dateGo);
    minDateOut.setDate(dateGo.getDate() + minDays);

    const maxDateOut = new Date(dateGo);
    maxDateOut.setDate(dateGo.getDate() + maxDays);

    this.minDateOut = minDateOut.toISOString().split('T')[0];
    this.maxDateOut = maxDateOut.toISOString().split('T')[0];

    if (dateOutControl?.value) {
      const selectedDateOut = new Date(dateOutControl.value);
      if (selectedDateOut < minDateOut || selectedDateOut > maxDateOut) {
        dateOutControl.setValue(null);
      }
    }

    if (dateOutControl?.value) {
      const dateReturn = new Date(dateOutControl.value);
      const timeDif = dateReturn.getTime() - dateGo.getTime();
      const daysDif = Math.ceil(timeDif / (1000 * 60 * 60 * 24));

      this.totalPrice = this.packagesData.price + 40;
    }
  }
}
