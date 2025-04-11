import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PackagesService } from '../../services/packages.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-packages-slider',
  templateUrl: './packages-slider.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink, CurrencyPipe],
  styleUrls: ['./packages-slider.component.scss'],
})
export class PackagesSliderComponent implements OnInit {
  datos: any;

  constructor(private comboService: PackagesService) {}

  ngOnInit(): void {
    this.datosPackages();
  }

  datosPackages() {
    this.comboService.obtenerPackages().subscribe((response) => {
      this.datos = response.value;
      // console.log(response);
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
