<template>
  <div class="a-text">
    <h3>文本对齐</h3>
    <div class="item"><a-text align="justify" style="width:160px;">两端对齐</a-text></div>
    <div class="item"><a-text align="center" style="width:160px;">居中</a-text></div>
    <div class="item"><a-text align="left" style="width:160px;">左对齐</a-text></div>
    <div class="item"><a-text align="right" style="width:160px;">右对齐</a-text></div>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
.item {
  margin: 10px 0;
}
</style>