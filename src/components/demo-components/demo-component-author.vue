<template>
  <p class="author">
    {{ author ? '作者：' + author : '' }}
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: 'demo-component-author',
  props: {
    author: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.author {
  color:#567;
  font-family:Georgia,serif;
  background: #e5cd26;
  font-weight: 700;
  padding: 10px;
}
</style>