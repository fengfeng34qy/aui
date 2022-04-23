
import auiBox from './a-box'
import auiText from './a-text'

let components = [auiBox, auiText]

let install = function(Vue, options) {
  components.forEach(function (component) {
    console.log('注册组件: ', component.name)
    Vue.use(component);
  });
}

export default {
  install,
  auiBox,
  auiText
};
