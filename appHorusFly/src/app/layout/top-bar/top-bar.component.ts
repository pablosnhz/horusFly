import { Component, inject, OnInit, Signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [RouterLink, RouterModule],
  standalone: true,
})
export class TopBarComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  detailRoute = false;
  $user: Signal<null> = this.authService.$user;
  $userName: Signal<null> = this.authService.$userName;

  ngOnInit(): void {
    this.detailRoute = this.checkDetailRoute(this.router.url);

    this.router.events.subscribe(() => {
      this.detailRoute = this.checkDetailRoute(this.router.url);
    });

    if (this.authService.$user()) {
      this.authService.getUser();
    }
  }

  private checkDetailRoute(url: string): boolean {
    return (
      url.includes('/details') ||
      url.includes('/checkout') ||
      url.startsWith('/accommodation/') ||
      url.includes('/packages/') ||
      url.includes('auth/profile')
    );
  }

  logout() {
    this.authService.logout();
  }
}
