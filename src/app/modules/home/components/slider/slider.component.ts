import { Component, OnInit } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';
import { environment } from '@environments/environment';
import { ISlider } from '../../interfaces/slider';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'home-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
  sliderItems: ISlider[];
  constructor(private sliderService: SliderService) {
    this.sliderItems = [];
  }

  ngOnInit() {
    this.getSliders();
  }

  getSliders() {
    let apiCall: IApiCall = {};
    this.sliderService.fetchSliders(apiCall).subscribe((res) => {
      this.sliderItems = res;
    });
  }
}
