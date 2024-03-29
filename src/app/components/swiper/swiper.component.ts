import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  slidesPerView:number = 5;
  screenWidth!: number;

  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 500){
      this.slidesPerView = 1;
    }
    else if(this.screenWidth >= 500 && this.screenWidth <= 740){
      this.slidesPerView = 2;
    }
   else if(this.screenWidth >= 740 && this.screenWidth <= 970){
      this.slidesPerView = 3;
    }
    else if(this.screenWidth >= 970 && this.screenWidth <= 1450){
      this.slidesPerView = 4;
    }
    else if(this.screenWidth >= 1450){
      this.slidesPerView = 6;
    }
  }
}
