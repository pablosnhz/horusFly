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
        import('./routes/components/home/home.module').then( h => h.HomeModule )
      },
      {
        path: 'flights',
        loadChildren: () =>
        import('./routes/components/flights/flights.module').then( f => f.FlightsModule )
      },
      {
        path: 'lodging',
        loadChildren: () =>
        import('./routes/components/lodging/lodging.module').then( l => l.LodgingModule )
      },
      {
        path: 'packages',
        loadChildren: () =>
        import('./routes/components/packages/packages.module').then( p => p.PackagesModule )
      },
      {
        path: 'qa',
        component: QandaComponent
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/auth/pages/auth.module').then( x => x.AuthModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
