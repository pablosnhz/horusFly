import { Component, OnInit, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  detailRoute = false;
  $user: Signal<null> = this.authService.$user;
  $userName: Signal<null> = this.authService.$userName;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.router.events.subscribe(() => {
      this.detailRoute =
        this.router.url.includes('/details') ||
        this.router.url.includes('/checkout') ||
        this.router.url.startsWith('/accommodation/') ||
        this.router.url.includes('/packages/') ||
        this.router.url.includes('auth/profile');
    });
  }
  ngOnInit(): void {
    if (this.authService.$user()) {
      this.authService.getUser();
    }
  }

  logout() {
    this.authService.logout();
  }
}
