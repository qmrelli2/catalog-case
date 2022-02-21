import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISlider } from '@app/modules/home/interfaces/slider';
import { environment } from '@environments/environment';

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
  @Input() imgList!: ISlider[];
  @Input() slidesPerView: number;
  @Input() spaceBetween: number;
  @Input() loop: boolean;
  @Input() autoplay: boolean;

  swiper: any;
  showBottomLine: boolean;

  constructor(private router: Router) {
    this.slidesPerView = 1;
    this.spaceBetween = 30;
    this.loop = false;
    this.showBottomLine = false;
    this.autoplay = false;
  }

  ngOnInit() {}

  onSwiper(swiper: any) {
    this.swiper = swiper;
  }

  onSlideChange() {}

  ngOnDestroy() {}

  convertUrl(link: string) {
    return environment.apiUrl + link;
  }

  onClick(img: ISlider) {
    this.router.navigate(['product/' + img.productId]);
  }
}
