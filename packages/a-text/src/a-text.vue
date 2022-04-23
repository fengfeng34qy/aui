<template>
  <div class="a-text">
    <div class="a-text-box" :class="alignClass">
      <span v-for="(item, index) in values" :key="index">{{item ===' ' ? '&nbsp;' : item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'a-text',
  author: 'sunfengfeng',
  data() {
    return {}
  },
  props: {
    align: {
      type: String,
      default: "left"
    }
  },
  computed: {
    values() {
      if (!this.$slots.default) {
        return '';
      }
      return this.$slots.default[0].text;
    },
    alignClass() {
      return "a-text-box-" + this.align;
    }
  }
}
</script>
<style scoped>
.a-text {
  display: inline-block;
}

.a-text-box {
  font-family: inherit;
  display: flex;
  justify-content: flex-start;
}

.a-text-box-justify {
  justify-content: space-between;
}

.a-text-box-center {
  justify-content: center;
}

.a-text-box-right {
  justify-content: flex-end;
}
</style>