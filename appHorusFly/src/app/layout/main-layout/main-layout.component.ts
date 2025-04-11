import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from 'src/app/shared/pages/chatbot/chatbot.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, FooterComponent, ChatbotComponent],

  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {}
