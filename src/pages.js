export default {
  'quickstart': () => import(/* webpackChunkName: 'quickstart' */'./views/quickstart.vue'),
  'install': () => import(/* webpackChunkName: 'install' */'./views/install.vue'),
  'a-box': () => import(/* webpackChunkName: 'a-box' */'./views/a-box.vue'),
  'a-text': () => import(/* webpackChunkName: 'a-text' */'./views/a-text.vue'),
}