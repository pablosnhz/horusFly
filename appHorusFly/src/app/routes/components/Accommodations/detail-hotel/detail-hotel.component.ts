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
import { AccomodationsService } from '../../services/accomodations.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailHotelComponent implements OnInit {
  @Input({ transform: numberAttribute }) idHotels!: number;

  infoHotel$!: Observable<any>;

  constructor(private acService: AccomodationsService) {}

  ngOnInit(): void {
    this.infoHotel$ = this.acService
      .getInfoHotel()
      .pipe(map((data) => data.value.find((hotel: any) => hotel.idHotel === this.idHotels)));
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
