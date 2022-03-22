import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SSRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface SSRequestConfig extends AxiosRequestConfig {
  interceptors: SSRequestInterceptors
}
