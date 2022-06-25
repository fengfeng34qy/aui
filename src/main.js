
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from '../components/demo-block';
// import CustomDemoBlock from './CustomDemoBlock.vue'
import MainHeader from '../components/header'
import SideNav from '../components/side-nav'

import Aui from 'aui'; import 'aui/index.css' // 引入打包后的组件库和css样式，和下一行二选一
// import Aui from '../packages/index' // 引入组件源码，不需要引入样式，和上一行二选一

// 引入单个组件
// import { aBox } from 'aui'

// demo样式
import './css/demoStyle.css'

// demo组件
import demoComponents from './components/demo-components'

// console.log(Aui)
Vue.use(Aui)
Vue.use(demoComponents)

// Vue.use(aBox)

Vue.component('demo-block', demoBlock);
// Vue.component('CustomDemoBlock', CustomDemoBlock)
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);

Vue.config.productionTip = false

Vue.prototype.session = {name: 'sff'}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
