import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accommodationsComponent } from './accommodations.component';
import { DetailsComponent } from 'src/app/shared/pages/details/details.component';
import { DetailHotelComponent } from './detail-hotel/detail-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: accommodationsComponent,
  },
  {
    path: 'hotel/:id',
    component: DetailHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationsRoutingModule {}
