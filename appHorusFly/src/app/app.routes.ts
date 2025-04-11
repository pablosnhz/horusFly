import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { QandaComponent } from './routes/components/qanda/qanda.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/components/flights/flights.routes').then((f) => f.FLIGHTS_ROUTES),
      },
      {
        path: 'accommodation',
        loadChildren: () =>
          import('./routes/components/Accommodations/accommodations.routes').then(
            (a) => a.AC_ROUTES,
          ),
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./routes/components/packages/packages.routes').then((p) => p.PACKAGES_ROUTES),
      },
      {
        path: 'qa',
        component: QandaComponent,
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/pages/auth.routes').then((x) => x.AUTH_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       scrollPositionRestoration: 'top',
//       bindToComponentInputs: true,
//     }),
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
