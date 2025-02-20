import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  detailRoute = false;

  constructor(private router: Router){
    this.router.events.subscribe(() => {
      this.detailRoute = this.router.url.includes('/details') || this.router.url.includes('/checkout');
    })
  }
}
