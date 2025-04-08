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
    this.infoCombo$ = this.packageService.obtenerFlights().pipe(
      map((data) => {
        const packagesDataCombo = data.value.find(
          (packagesDataComboId: any) => packagesDataComboId.id === this.idCombo,
        );
        // console.log('datos de checkout COMBO', data);

        this.packagesComboData = packagesDataCombo;
        return packagesDataCombo;
      }),
    );
    this.infoPackages$ = this.packageService.obtenerPackages().pipe(
      map((data) => {
        const packagesData = data.value.find(
          (packagesId: any) => packagesId.id === this.idPackages,
        );
        // console.log('datos de checkout PACKAGES', data);

        this.packagesData = packagesData;
        return packagesData;
      }),
    );

    this.infoDiscount$ = this.packageService.obtenerDiscount().pipe(
      map((data) => {
        const packagesDataDiscount = data.value.find(
          (packagesDataDiscountId: any) => packagesDataDiscountId.id === this.idDiscount,
        );
        // console.log('datos de checkout DISCOUNT', data);

        this.packagesDiscountData = packagesDataDiscount;
        return packagesDataDiscount;
      }),
    );

    // hacemos la deteccion del calculatedTotal que nos da el valor final del price
    this.form
      .get('dataIn')
      ?.valueChanges.subscribe(() =>
        this.calculatedTotal(
          this.packagesData || this.packagesComboData || this.packagesDiscountData,
        ),
      );
    this.form
      .get('dataOut')
      ?.valueChanges.subscribe(() =>
        this.calculatedTotal(
          this.packagesData || this.packagesComboData || this.packagesDiscountData,
        ),
      );

    // detectamos la fecha para la interpolacion en la parte del tootal
    this.form.get('dataIn')?.valueChanges.subscribe((value) => {
      this.dataIn = value;
    });

    this.form.get('dataOut')?.valueChanges.subscribe((value) => {
      this.dataOut = value;
    });
  }

  formDatos() {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    let selectedPackage = null;
    if (this.packagesDiscountData) {
      selectedPackage = {
        key: 'formDiscount',
        data: this.packagesDiscountData,
      };
    } else if (this.packagesComboData) {
      selectedPackage = {
        key: 'formCombo',
        data: this.packagesComboData,
      };
    } else if (this.packagesData) {
      selectedPackage = {
        key: 'formPackages',
        data: this.packagesData,
      };
    }

    if (!selectedPackage) {
      return;
    }

    const formCombined = {
      form: this.form.value,
      total: this.totalPrice,
      hotel: {
        type: selectedPackage.data.comboType,
        country: selectedPackage.data.destinations,
        countryTwo: selectedPackage.data.destinationsTwo,
        hotels: selectedPackage.data.hotel,
        minDays: selectedPackage.data.minDays,
        maxDays: selectedPackage.data.maxDays,
        includes: selectedPackage.data.includes,
      },
    };

    let storedArray = JSON.parse(sessionStorage.getItem(selectedPackage.key) || '[]');

    const exists = storedArray.some(
      (item: any) => JSON.stringify(item) === JSON.stringify(formCombined),
    );

    if (!exists) {
      storedArray.push(formCombined);
      sessionStorage.setItem(selectedPackage.key, JSON.stringify(storedArray));
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
    }
    if (this.packagesData) {
      this.totalPrice = this.packagesData.price + 40;
    } else if (this.packagesComboData) {
      this.totalPrice = this.packagesComboData.price + 40;
    } else if (this.packagesDiscountData) {
      this.totalPrice = this.packagesDiscountData.price + 40;
    }
  }
}
