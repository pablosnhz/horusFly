import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PackagesModule } from './routes/components/packages/packages.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutoDestroyService } from './core/services/utils/auto-destroy.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    PackagesModule,
    HttpClientModule,
    // LayoutModule
  ],
  providers: [
    AutoDestroyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
