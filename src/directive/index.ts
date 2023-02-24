import { App } from 'vue'
import hasPermi from './modules/hasPermi'

const directivesList: any = {
  hasPermi,
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  },
}

export default directives
