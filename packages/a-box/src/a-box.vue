<template>
  <div class="a-box" :style="{'flex-direction': direction, 'justify-content': justifyContent}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'a-box',
  data() {
    return {
      direction: '',
      justifyContent: ''
    }
  },
  props: {
    // direction: {
    //   type: String,
    //   default: 'row'
    // },
    // justifyContent: {
    //   type: String,
    //   default: 'center'
    // }
  },
  created() {
    // console.log(this.justifyContent)
    this.direction = this.$attrs["direction"] || 'row';
    this.justifyContent = this.$attrs["justify-content"] || 'center';
  },
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

