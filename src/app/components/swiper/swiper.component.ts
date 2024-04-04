import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, OnInit, ViewChild, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';



@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit{

  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElemConstrutor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions ={
      slidesPerView: 1,
      spaceBetween: 50,

      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };
    Object.assign(swiperElemConstrutor!, swiperOptions);
    this.swiperElement.set(swiperElemConstrutor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
