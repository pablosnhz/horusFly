import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  chatVisible = false;

  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }
}
