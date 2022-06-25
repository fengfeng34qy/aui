import demoComponentAuthor from './demo-component-author'
import demoComponentDialog from './demo-component-dialog'

let components = [demoComponentAuthor, demoComponentDialog]

export default {
  install: function(Vue) {
    components.forEach(function (component) {
      Vue.component(component.name, component);
    });
  }
}