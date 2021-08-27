import { App } from 'vue'
import registerElement from './register-element'
export function globalRegister(app: App) {
  // registerElement(app)
  // 注册element-plus
  app.use(registerElement)
}
