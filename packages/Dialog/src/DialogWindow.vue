<template>
  <transition name="dialog-fade" v-on:after-enter="onAfterEnter" v-on:after-leave="onAfterLeave">
    <div class="dialog-window" v-if="visible" @click.self="handleWrapperClick">
      <component ref="dialogContent" :dialogBoxContentArgs="dialogBoxContentArgs" :is="content" class="aui-content-presenter transform-target"></component>
      <!-- <a-button type="primary">粉丝按钮</a-button> -->
    </div>
  </transition>
</template>
<script>
export default {
  name: "dialog-window",
  props: ["content", "closeContentModalRestPart"],
  data() {
    return {
      visible: false,
      dialogContentResult: undefined,
      dialogBoxContentArgs: undefined,
      isRealClose: true
    };
  },
  methods: {
    onAfterEnter() {
      var dialogContent = this.$refs.dialogContent;

      if (dialogContent) {
        dialogContent.onNavigated && dialogContent.onNavigated();
      }
    },
    onAfterLeave() {
      this.$emit("doRealClose", this.dialogContentResult);
    },
    onClose() {
      var dialogContent = this.$refs.dialogContent;

      if (dialogContent) {
        dialogContent.onClose && dialogContent.onClose();
        this.dialogContentResult = dialogContent.result;
      }
    },
    handleWrapperClick() {
      if (!this.closeContentModalRestPart) return;
      this.$emit('close');
    }
  }
}
</script>
<style scoped>
:root {
  /* -------------------DialogBox--------------------------------------- */
  --dialogBox-mask-opacity: 0.5;
}

.dialog-window {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.dialog-fade-enter-active {
  animation: dialog-fade-in .3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .3s;
}

.aui-content-presenter {
  position: relative;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>