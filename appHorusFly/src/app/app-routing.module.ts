import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { QandaComponent } from './routes/components/qanda/qanda.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/components/flights/flights.module').then((f) => f.FlightsModule),
      },
      {
        path: 'accommodation',
        loadChildren: () =>
          import('./routes/components/Accommodations/accommodations.module').then(
            (a) => a.AccommodationsModule,
          ),
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./routes/components/packages/packages.module').then((p) => p.PackagesModule),
      },
      {
        path: 'qa',
        component: QandaComponent,
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/pages/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
