
## Dialog

:::demo
```html
<demo-component-dialog></demo-component-dialog>

<!-- 使用方式 -->
<!-- <a-button type="primary" @click="showNonDialog1">showNonDialog1</a-button> -->
<!-- <a-button type="green" @click="showNonDialog2">showNonDialog2</a-button> -->
<!-- <a-button type="warn" @click="showNonDialog3">等待弹窗</a-button> -->

<script>
  // import { Dialog } from 'aui' // 注意: 此行需要解除注释！

  export default {
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



```
:::