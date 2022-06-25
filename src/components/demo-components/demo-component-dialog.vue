<template>
  <div class="dialog-demo">
    <a-button type="pink" @click="showNonDialog1">showNonDialog1</a-button>
    <a-button type="green" @click="showNonDialog2">showNonDialog2</a-button>
    <a-button type="orange" @click="showNonDialog3">等待弹窗</a-button>
  </div>
</template>
<script>
import AwaitNonDialog from './AwaitNonDialog.vue'
import AwaitDialog from './AwaitDialog.vue'
// import { Dialog } from 'aui'
import Dialog from '../../../packages/Dialog'

export default {
  name: 'demo-component-dialog',
  data() {
    return {
      message: '加载中...',
      dialogBoxContentArgs: {
        message: '加载中'
      }
    }
  },
  methods: {
    showNonDialog1() {
      this.dialogBoxContentArgs.message = '点击遮罩可以关闭弹窗'
      Dialog.showNonAwait(AwaitNonDialog, {
        closeContentModalRestPart: true,
        dialogBoxContentArgs: {
          content: this.dialogBoxContentArgs
        }
      });
    },
    showNonDialog2() {
      this.dialogBoxContentArgs.message = '稍等1秒...'
      Dialog.showNonAwait(AwaitNonDialog, {
        closeContentModalRestPart: true,
        dialogBoxContentArgs: {
          content: this.dialogBoxContentArgs
        }
      });
      setTimeout(()=> {
        this.dialogBoxContentArgs.message = '加载完成！'
      }, 1000)
    },
    async showNonDialog3() {
      this.dialogBoxContentArgs.message = 'wait等待弹窗...'
      let result = await Dialog.showAwait(AwaitDialog, {
        closeContentModalRestPart: true,
        dialogBoxContentArgs: {
          content: this.dialogBoxContentArgs
        }
      });
      console.log(result)
    }
  }
}
</script>