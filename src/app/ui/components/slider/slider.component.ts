import { Component, Input, OnDestroy, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'ui-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
})
export class UISliderComponent implements OnInit, OnDestroy {
  @Input() imgList: any = [];
  @Input() slidesPerView: number;
  @Input() spaceBetween: number;
  @Input() loop: boolean;
  @Input() autoplay: boolean;

  swiper: any;
  showBottomLine: boolean;

  constructor() {
    this.slidesPerView = 1;
    this.spaceBetween = 30;
    this.loop = false;
    this.showBottomLine = false;
    this.autoplay = false;
  }

  ngOnInit() {
    if (this.imgList.length > 1) {
      this.showBottomLine = true;
    } else {
      this.loop = false;
    }
  }

  onSwiper(swiper: any) {
    this.swiper = swiper;
  }

  onSlideChange() {}

  ngOnDestroy() {}
}
