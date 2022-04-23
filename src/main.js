
import Vue from 'vue'
import App from './App'
import router from './router'


// import sffButton from '../lib/sff-vue-commponents'
// console.log(sffButton)

// 引入打包后的组件库
import Aui from 'aui'


// 引入组件源码
// import Aui from '../packages/index'

console.log(Aui)
Vue.use(Aui)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
