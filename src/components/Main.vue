<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
  </div>
</template>

<script>
export default {
  name: 'yyl-npm-practice',
  data () {
    return {
      msg: '这是Main组件里的msg'
    }
  },
  props: {
      propData: {
          type: String,
          default: '我是默认值'
      }
  },
  mounted () {
    console.log(11)
  }
}
</script>

<style>
.container{
    text-align: center;
}
</style>
