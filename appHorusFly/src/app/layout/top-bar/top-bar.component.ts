import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  detailRoute = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.router.events.subscribe(() => {
      this.detailRoute =
        this.router.url.includes('/details') ||
        this.router.url.includes('/checkout') ||
        this.router.url.startsWith('/accommodation/');
    });
  }

  logOut() {
    sessionStorage.removeItem('tokenFly');
    this.router.navigate(['/']);
  }
}
