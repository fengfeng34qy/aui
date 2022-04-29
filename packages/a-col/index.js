import aCol from './src/a-col';
import './src/a-col.css'

aCol.install = function(Vue) {
  Vue.component(aCol.name, aCol);
};

export default aCol;