<template>
  <div class="a-box" :style="{ 'flex-direction': direction, 'justify-content': justifyContent, 'align-items': alignItems, 'order': order}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'a-box',
  author: 'sunfengfeng',
  data() {
    return {
      direction: '',
      justifyContent: ''
    }
  },
  props: {
    direction: {
      type: String,
      default: "row"
    },
    justifyContent: {
      type: String,
      default: "center"
    },
    alignItems: {
      type: String,
      default: "center"
    },
    order: {
      type: String,
      default: "0"
    }
  },
  created() {},
  mounted() {}
}
</script>

<style scoped>
.a-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>

