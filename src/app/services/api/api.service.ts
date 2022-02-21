import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { IApiCall } from '@interfaces/api-call';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(apiCall: IApiCall) {
    let url = environment.apiUrl + '/' + apiCall.path;

    return this.http.get(url, apiCall.options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  post(apiCall: IApiCall) {
    let url = environment.apiUrl + '/' + apiCall.path;

    return this.http.post(url, apiCall.body, apiCall.options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  patch(apiCall: IApiCall) {
    let url = environment.apiUrl + '/' + apiCall.path;

    return this.http.patch(url, apiCall.body, apiCall.options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  delete(apiCall: IApiCall) {
    let url = environment.apiUrl + '/' + apiCall.path;

    return this.http.delete(url, apiCall.options).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  keepAlive() {
    let url = environment.apiUrl + '/auth/keepalive';
    return this.http.get(url);
  }

  private handleError(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server error');
  }
}
