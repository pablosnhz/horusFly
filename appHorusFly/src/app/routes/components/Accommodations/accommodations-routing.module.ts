import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accommodationsComponent } from './accommodations.component';

const routes: Routes = [
  {
    path: '',
    component: accommodationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationsRoutingModule { }
