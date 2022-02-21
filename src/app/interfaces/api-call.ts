export interface IApiCall {
  path?: string;
  body?: any;
  options?: IApiCallOptions;
}

export interface IApiCallOptions {
  headers?: any;
  params?: any;
}
