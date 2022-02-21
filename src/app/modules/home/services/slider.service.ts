import { Injectable } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';

import { ApiService } from '@app/services/api/api.service';
import { tap } from 'rxjs/operators';
import { ISlider } from '../interfaces/slider';

@Injectable({ providedIn: 'root' })
export class SliderService {
  apiPath: string;

  constructor(private apiService: ApiService) {
    this.apiPath = 'sliders';
  }

  fetchSliders(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: ISlider[]) => res));
  }
}
