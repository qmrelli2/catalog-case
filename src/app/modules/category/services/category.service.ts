import { Injectable } from '@angular/core';
import { IApiCall } from '@app/interfaces/api-call';

import { ApiService } from '@app/services/api/api.service';
import { tap } from 'rxjs/operators';
import { ICategory } from '../interfaces/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  apiPath: string;

  constructor(private apiService: ApiService) {
    this.apiPath = 'categories';
  }

  fetchCategories(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: ICategory[]) => res));
  }

  categoryDetail(apiCall: IApiCall) {
    apiCall.path = apiCall.path || this.apiPath;
    return this.apiService.get(apiCall).pipe(tap((res: ICategory) => res));
  }
}
