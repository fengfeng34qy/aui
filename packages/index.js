
import aBox from './a-box'
import aText from './a-text'
import aRow from './a-row'
import aCol from './a-col'

let components = [aBox, aText, aRow, aCol]

let Aui = function(Vue, options) {
  components.forEach(function (component) {
    console.log('注册组件: ', component.name)
    Vue.use(component);
  });
}

export {
  aBox,
  aText,
  aRow
};
export default {
  install: Aui
};
