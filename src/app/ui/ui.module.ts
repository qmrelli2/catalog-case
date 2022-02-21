import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// 3rth Party
import { SwiperModule } from 'swiper/angular';

// Components
import { UISliderComponent } from './components/slider/slider.component';

// Directives
import { ClickStopPropagation } from './directives/propagation.directive';

@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [UISliderComponent, ClickStopPropagation],
  providers: [],
  exports: [UISliderComponent, ClickStopPropagation, SwiperModule],
})
export class UIModule {}
