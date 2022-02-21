import { Injectable } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';
import { IProduct } from '@app/modules/product/interfaces/product';

import { ApiService } from '@app/services/api/api.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  apiPath: string;

  constructor(private apiService: ApiService) {
    this.apiPath = 'favorites';
  }

  fetchFavorites(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: IProduct[]) => res));
  }

  addFavorite(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.post(apiCall).pipe(tap((res: any) => res));
  }
}
