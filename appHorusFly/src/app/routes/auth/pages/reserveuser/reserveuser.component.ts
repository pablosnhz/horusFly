import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserveuser',
  templateUrl: './reserveuser.component.html',
  styleUrls: ['./reserveuser.component.scss'],
})
export class ReserveuserComponent implements OnInit {
  reservationDataAccommodation: any = null;
  reservationDataFly: any = null;

  reservationForPackagesPack: any = null;
  reservationForPackagesCombo: any = null;
  reservationForPackagesDiscount: any = null;

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    const storedData = sessionStorage.getItem('formAcomoda');
    const storedDataFly = sessionStorage.getItem('formFly');

    const storedPackagesPack = sessionStorage.getItem('formPackages');
    const storedPackagesCombo = sessionStorage.getItem('formCombo');
    const storedPackagesDiscount = sessionStorage.getItem('formDiscount');

    if (storedData) {
      this.reservationDataAccommodation = JSON.parse(storedData);
    }
    if (storedDataFly) {
      this.reservationDataFly = JSON.parse(storedDataFly);
    }

    // packages
    if (storedPackagesPack) {
      this.reservationForPackagesPack = JSON.parse(storedPackagesPack);
    }
    // combo
    if (storedPackagesCombo) {
      this.reservationForPackagesCombo = JSON.parse(storedPackagesCombo);
    }
    // discount
    if (storedPackagesDiscount) {
      this.reservationForPackagesDiscount = JSON.parse(storedPackagesDiscount);
    }
  }

  deleteCard(index: number, type: 'hotel' | 'fly' | 'packages' | 'combo' | 'discount') {
    if (type === 'hotel') {
      this.reservationDataAccommodation.splice(index, 1);
      sessionStorage.setItem('formAcomoda', JSON.stringify(this.reservationDataAccommodation));
    }

    if (type === 'fly') {
      this.reservationDataFly.splice(index, 1);
      sessionStorage.setItem('formFly', JSON.stringify(this.reservationDataFly));
    }

    if (type === 'packages') {
      this.reservationForPackagesPack.splice(index, 1);
      sessionStorage.setItem('formPackages', JSON.stringify(this.reservationForPackagesPack));
    }
    if (type === 'combo') {
      this.reservationForPackagesCombo.splice(index, 1);
      sessionStorage.setItem('formCombo', JSON.stringify(this.reservationForPackagesCombo));
    }
    if (type === 'discount') {
      this.reservationForPackagesDiscount.splice(index, 1);
      sessionStorage.setItem('formDiscount', JSON.stringify(this.reservationForPackagesDiscount));
    }
  }
}
