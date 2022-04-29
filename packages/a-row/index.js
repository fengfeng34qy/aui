import aRow from './src/a-row';
import './src/a-row.css'

aRow.install = function(Vue) {
  Vue.component(aRow.name, aRow);
}

export default aRow;