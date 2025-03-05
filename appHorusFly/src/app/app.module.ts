import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PackagesModule } from './routes/components/packages/packages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    PackagesModule,
    HttpClientModule,
    // LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
