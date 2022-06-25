import aButton from './src/a-button'

aButton.install = function(Vue) {
  Vue.component(aButton.name, aButton)
}

export default aButton