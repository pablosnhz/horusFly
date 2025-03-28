import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserveuser',
  templateUrl: './reserveuser.component.html',
  styleUrls: ['./reserveuser.component.scss'],
})
export class ReserveuserComponent implements OnInit {
  reservationDataAccommodation: any = null;
  reservationDataFly: any = null;
  reservationDataCombo: any = null;

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    const storedData = sessionStorage.getItem('formAcomoda');
    const storedDataFly = sessionStorage.getItem('formFly');

    if (storedData) {
      this.reservationDataAccommodation = JSON.parse(storedData);
    }
    if (storedDataFly) {
      this.reservationDataFly = JSON.parse(storedDataFly);
    }
  }

  deleteCard(index: number, type: 'hotel' | 'fly') {
    if (type === 'hotel') {
      this.reservationDataAccommodation.splice(index, 1);
      sessionStorage.setItem('formAcomoda', JSON.stringify(this.reservationDataAccommodation));
    }

    if (type === 'fly') {
      this.reservationDataFly.splice(index, 1);
      sessionStorage.setItem('formFly', JSON.stringify(this.reservationDataFly));
    }
  }
}
