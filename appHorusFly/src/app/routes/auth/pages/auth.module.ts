import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ReserveuserComponent } from './reserveuser/reserveuser.component';
import { DatosUserComponent } from './datos-user/datos-user.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, ReserveuserComponent, DatosUserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // importamos el modulo de layout para poder traer el topbarComponent
    LayoutModule,
  ],
})
export class AuthModule {}
