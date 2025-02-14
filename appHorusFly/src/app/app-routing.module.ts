import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./shared/shared.module').then( m => m.SharedModule )
      },
      // aca van a ir las secciones del topBar las cuales van a ser componentes dinamicos para el contenido
      // cuatro secciones con icon y con el routerLinkActive
        // [routerLink]="['/']"
        // routerLinkActive="underline underline-offset-8"
        // [routerLinkActiveOptions]="{exact: true}"
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
