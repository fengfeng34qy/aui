<template>
  <div>
    <h2>基础布局</h2>
    <div class="demo-layout">
      <a-row class="item">
        <a-col :span="24"><div class="grid-content bg-purple-dark"></div></a-col>
      </a-row>
      <a-row class="item">
        <a-col :span="12"><div class="grid-content bg-purple"></div></a-col>
        <a-col :span="12"><div class="grid-content bg-purple-light"></div></a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
.demo-layout .grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.demo-layout .bg-purple-dark {
  background: #99a9bf;
}
.demo-layout .bg-purple {
  background: #d3dce6;
}
.demo-layout .bg-purple-light {
  background: #e5e9f2;
}
.demo-layout .item {
  margin-bottom: 20px;
}
</style>