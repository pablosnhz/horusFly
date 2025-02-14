import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor( private router: Router ){}

  gotToLogin(){
    this.router.navigate(['/login']);
  }

  gotToRegister(){
    this.router.navigate(['/login/register']);
  }
}
