import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SSRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}
export interface SSRequestConfig extends AxiosRequestConfig {
  interceptors?: SSRequestInterceptors
  showLoading?: boolean
}
