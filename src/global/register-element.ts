import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/index.css' //babel.config.js中配置有问题
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElForm,
  ElFormItem,
  ElInput
} from 'element-plus/lib/components'

const components = [ElButton, ElTabs, ElTabPane, ElCheckbox, ElLink, ElForm, ElFormItem, ElInput]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
