import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationComponent } from './pages/destination/destination.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { register } from 'swiper/element/bundle';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
register();

@NgModule({
  declarations: [DestinationComponent, ChatbotComponent, CheckoutComponent, SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DestinationComponent, ChatbotComponent, SpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
