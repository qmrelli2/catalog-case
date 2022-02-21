import { Injectable } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';

import { ApiService } from '@app/services/api/api.service';
import { tap } from 'rxjs/operators';
import { IProduct } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  apiPath: string;

  constructor(private apiService: ApiService) {
    this.apiPath = 'products';
  }

  fetchCategoryProducts(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: IProduct[]) => res));
  }

  productDetail(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: IProduct) => res));
  }
}
