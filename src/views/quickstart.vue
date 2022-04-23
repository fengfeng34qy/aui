<template>
  <div class="quickstart">
    <div>
      <h3>
        引入 Aui
      </h3>
      <pre class="code">
        import Vue from 'vue';

        import Aui from 'aui';

        import 'aui/lib/index/index.css'

        import App from './App.vue';

        Vue.use(Aui);

        new Vue({
          el: '#app',
          render: h => h(App)
        });
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'quickstart'
}
</script>
<style scoped>
.quickstart {
  /* padding: 0 20px; */
}
.code {
  font-size: 18px;
  font-weight: 700;
  border-radius: 6px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  padding: 10px;
}

/* 移动端 */
@media screen and (max-width: 768px) {
  .code {
    font-size: 1em;
  }
}
</style>