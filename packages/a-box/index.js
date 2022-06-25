import auiBox from './src/a-box';

auiBox.install = function(Vue) {
  Vue.component(auiBox.name, auiBox);
}
export default auiBox;