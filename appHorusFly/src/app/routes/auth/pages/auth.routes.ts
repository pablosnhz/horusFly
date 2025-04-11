import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from 'src/app/core/guard/auth.guard';
import { nouserGuard } from 'src/app/core/guard/no-user.guard';
import { ReserveuserComponent } from './reserveuser/reserveuser.component';
import { DatosUserComponent } from './datos-user/datos-user.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [nouserGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [nouserGuard],
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: ProfileComponent,
    children: [
      {
        path: 'reserve',
        component: ReserveuserComponent,
      },
      {
        path: 'user',
        component: DatosUserComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
