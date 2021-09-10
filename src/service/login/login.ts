import hyRequest from '../index'
import { IAccount, ILoginRequest } from './type'
import { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

// 请求用户登录
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginRequest>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

// 请求用户菜单
export function requestUserMenusById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
