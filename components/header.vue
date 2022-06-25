<template>
  <div class="header">
    <div>Aui组件库</div>
    <a class="github" href="https://github.com/fengfeng34qy/aui" target="_bank">
      <img class="header-github-ico" src="../static/images/favicon.png" alt="">
    </a>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
.header{
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background: #fff;
  z-index: 100;
}
.github {
  position: absolute;
  right: 24px;
  top: 0;
  top: 24px;
  height: 32px;
  display: flex;
}
</style>