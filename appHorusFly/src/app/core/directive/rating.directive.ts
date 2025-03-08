import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRating]',
})
export class RatingDirective implements OnInit {
  @Input() appRating: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderStars();
  }

  private renderStars() {
    const maxStars = 5;
    this.el.nativeElement.innerHTML = '';

    for (let i = 0; i < maxStars; i++) {
      const star = this.renderer.createElement('span');
      star.innerHTML = '★';
      this.renderer.setStyle(star, 'font-size', '20px');
      this.renderer.setStyle(star, 'color', i < this.appRating ? 'gold' : '#ddd');

      this.renderer.appendChild(this.el.nativeElement, star);
    }
  }
}
