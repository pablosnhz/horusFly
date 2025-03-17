import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DestinationComponent } from './pages/destination/destination.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { DetailsComponent } from './pages/details/details.component';
import { register } from 'swiper/element/bundle';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
register();

@NgModule({
  declarations: [
    DestinationComponent,
    ChatbotComponent,
    DetailsComponent,
    CheckoutComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [DestinationComponent, ChatbotComponent, SpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
