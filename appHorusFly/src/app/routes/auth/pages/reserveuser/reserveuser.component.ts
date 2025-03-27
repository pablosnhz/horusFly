import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserveuser',
  templateUrl: './reserveuser.component.html',
  styleUrls: ['./reserveuser.component.scss'],
})
export class ReserveuserComponent implements OnInit {
  reservationData: any = null;

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    const storedData = sessionStorage.getItem('form');
    if (storedData) {
      this.reservationData = JSON.parse(storedData);
    }
  }

  deleteCard(index: number) {
    this.reservationData.splice(index, 1);
    sessionStorage.setItem('form', JSON.stringify(this.reservationData));
  }
}
