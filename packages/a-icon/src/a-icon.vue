<template>
  <span class="a-icon icon iconfont " :class="icon ? iconClass : ''" :style="{color: color}"></span>
</template>
<script>
export default {
  name: 'a-icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#000',
    }
  },
  computed: {
    iconClass() {
      return `a-icon-${this.icon}`;
    }
  }
}
</script>
<style scoped>
.a-icon {
  display: inline-block;
}
</style>