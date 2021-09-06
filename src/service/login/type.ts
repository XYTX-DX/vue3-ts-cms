export interface IAccount {
  name: string
  password: string
}

export interface ILoginRequest {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}