<template>
  <div class="install">
    <h3>npm 安装</h3>
    <div>
      npm install aui -S
    </div>
  </div>
</template>
<script>
import aMd from './a.md'

export default {
  name: '',
  created() {
    console.log(aMd)
  }
}
</script>
<style scoped>
.install {
  /* padding: 0 20px; */
}
</style>