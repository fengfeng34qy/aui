<template>
  <div class="dialog-box">
    {{ this.dialogBoxContentArgs.content.message }}
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['dialogBoxContentArgs'],
  created() {}
}
</script>
<style scoped>
.dialog-box {
  width: 460px;
  height: 360px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

@media screen and (max-width: 768px) {
  .dialog-box {
    width: 65%;
    height: 200px;
  }
  .button-box {
    width: 100%;
    padding: 1rem 2rem;
  }
}

</style>