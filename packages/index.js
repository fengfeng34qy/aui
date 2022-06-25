
import Utils from './utils'
import Dialog from './Dialog'

// 组件
import aBox from './a-box'
import aText from './a-text'
import aRow from './a-row'
import aCol from './a-col'
import aButton from './a-button'
import aIcon from './a-icon'

import './theme-chalk/icon.css'

let components = [aBox, aText, aRow, aCol, aButton, aIcon]
console.log(components)
let Aui = function(Vue, options) {
  components.forEach(function (component) {
    console.log('注册组件: ', component.name)
    Vue.use(component);
  });
}

export {
  Utils,
  Dialog,
  aBox,
  aText,
  aRow,
  aCol,
  aButton,
  aIcon,
};
export default {
  install: Aui
};
