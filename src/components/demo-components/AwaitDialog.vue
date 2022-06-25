<template>
  <div class="dialog-box">
    <div class="content">
      {{ this.dialogBoxContentArgs.content.message }}
    </div>
    <div class="footer">
      <div class="button-box">
        <button class="dialog-button dialog-button-pink" type="green" @click="onClick('取消')">取消</button>
        <button class="dialog-button dialog-button-green" type="green" @click="onClick('确定')">确定</button>
        <!-- <a-button type="primary">粉色按钮</a-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "aui";

export default {
  data() {
    return {
      result: ''
    }
  },
  mixins: [],
  props: ['dialogBoxContentArgs'],
  created() {},
  methods: {
    onClick(item) {
      if (item === '确定') {
        this.result = 'ok';
      } else if (item === '取消') {
        this.result = 'cancel';
      }
      Dialog.close(this);
    },
  }
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
  flex-direction: column;
}
.dialog-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  /* transition: .1s; */
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.2);

  color: #fff;
  
}
.dialog-button-green {
  background-image: linear-gradient(#8eb349, #5f7c22);
}
.dialog-button-pink {
  background-image: linear-gradient(#fbb2d0, #e779aa);
}
.dialog-button-orange {
  background-image: linear-gradient(#f5c153, #ea920d);
}

.content {
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  box-sizing: border-box;
}
.button-box {
  display: flex;
  justify-content: space-between;
  width: 240px;
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