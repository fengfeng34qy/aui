## 快速上手
#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import Aui from 'aui';
import 'aui/index.css'
import App from './App.vue';

Vue.use(Aui);
new Vue({
  el: '#app',
  render: h => h(App)
});
```


#### 按需引入
```javascript
import Vue from 'vue';
import { aButton } from 'aui';
import App from './App.vue';

Vue.component(aButton.name, aButton);
/* 或写为
 * Vue.use(aButton)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```