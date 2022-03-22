import { App } from 'vue'
import { ElButton } from 'element-plus/lib/components'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/index.css' //babel.config.js中配置有问题
const components = [ElButton]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
