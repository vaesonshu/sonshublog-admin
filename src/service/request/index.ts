import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { SSRequestConfig, SSRequestInterceptors } from './type'
class SSRequest {
  instance: AxiosInstance
  interceptors?: SSRequestInterceptors

  constructor(config: SSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default SSRequest
