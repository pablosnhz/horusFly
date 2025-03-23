import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  reservationData: any = null;

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    const storedData = sessionStorage.getItem('form');
    if (storedData) {
      this.reservationData = JSON.parse(storedData);
      console.log(this.reservationData);
    }
  }
}
