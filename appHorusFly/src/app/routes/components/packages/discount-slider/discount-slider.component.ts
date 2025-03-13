import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-discount-slider',
  templateUrl: './discount-slider.component.html',
  styleUrls: ['./discount-slider.component.scss'],
})
export class DiscountSliderComponent implements OnInit {
  datosDiscount: any;

  constructor(private comboService: PackagesService) {}

  ngOnInit(): void {
    this.datosPackages();
  }

  datosPackages() {
    this.comboService.obtenerPackages().subscribe((response) => {
      this.datosDiscount = response.value;
      console.log(response);
    });
  }

  ocultarTexto = false;

  @ViewChild('swiper', { static: false }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    if (this.swiperEl) {
      const swiper = this.swiperEl.nativeElement as any;

      Object.assign(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 4,
          },
        },
      });

      swiper.initialize();
    }
  }
}
