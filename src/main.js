
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入打包后的组件库
// import Aui from 'aui'
// 引入单个组件
// import { aBox } from 'aui'


// 引入组件源码
import Aui from '../packages/index'

console.log(Aui)
Vue.use(Aui)

// Vue.use(aBox)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
