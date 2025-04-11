import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/top-bar/top-bar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TopBarComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {}
