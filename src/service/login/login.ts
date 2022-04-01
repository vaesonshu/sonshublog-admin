import ssRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}

export function accountLoginRequest(account: IAccount) {
  return ssRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return ssRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
