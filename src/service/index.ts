import DXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const dxRequest = new DXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default dxRequest
