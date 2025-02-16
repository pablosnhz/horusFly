import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DestinationComponent } from './pages/destination/destination.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

@NgModule({
  declarations: [
    DestinationComponent,
    ChatbotComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    DestinationComponent,
    ChatbotComponent,
  ]
})
export class SharedModule { }
