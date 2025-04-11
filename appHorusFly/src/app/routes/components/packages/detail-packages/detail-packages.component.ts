import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  numberAttribute,
  OnInit,
  ViewChild,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { PackagesService } from '../../services/packages.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-packages',
  templateUrl: './detail-packages.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./detail-packages.component.scss'],
})
export class DetailPackagesComponent implements OnInit {
  @Input({ transform: numberAttribute }) idPackages!: number;
  @Input({ transform: numberAttribute }) idCombo!: number;
  @Input({ transform: numberAttribute }) idDiscount!: number;

  infoDiscount$!: Observable<any>;
  infoPackage$!: Observable<any>;
  infoCombo$!: Observable<any>;

  constructor(private packageService: PackagesService) {}

  ngOnInit(): void {
    this.infoDiscount$ = this.packageService
      .obtenerDiscount()
      .pipe(map((data) => data.value.find((discount: any) => discount.id === this.idDiscount)));

    this.infoPackage$ = this.packageService
      .obtenerPackages()
      .pipe(map((data) => data.value.find((packages: any) => packages.id === this.idPackages)));

    this.infoCombo$ = this.packageService
      .obtenerFlights()
      .pipe(map((data) => data.value.find((combo: any) => combo.id === this.idCombo)));
  }

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
