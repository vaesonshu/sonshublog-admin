import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SSRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface SSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SSRequestInterceptors<T>
  showLoading?: boolean
}
