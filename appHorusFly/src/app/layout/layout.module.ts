import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent, TopBarComponent, FooterComponent],
  imports: [CommonModule, RouterOutlet, RouterModule, SharedModule],
  exports: [TopBarComponent],
})
export class LayoutModule {}
