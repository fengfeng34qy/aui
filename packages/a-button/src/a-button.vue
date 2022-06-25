<template>
  <div class="a-button-box">
    <button
      class="a-button"
      @click="handleClick"
      :disabled="buttonDisabled || loading"
      :autofocus="autofocus"
      :type="nativeType"
      :class="[
        type ? 'a-button--' + type : '',
        buttonSize ? 'a-button--' + buttonSize : '',
        {
          'is-disabled': buttonDisabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle
        }
      ]"
    >
      <i class="a-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'a-button',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style scoped>
.a-button-box {
  display: inline-block;
  line-height: 1;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
}
.a-button {
  display: inline-block;
  line-height: 1;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.2);
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  -webkit-appearance: none;
  outline: none;
  margin: 0;
  /* transition: .1s; */
  font-weight: 500;
  font-size: 14px;
}

/* --默认按钮 */
.a-button--default {
  background-image: linear-gradient(#ddd, #bbb);
  color: #fff;
  /* border: 1px solid rgba(0,0,0,.2); */
}
.a-button--default:active {
  box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
  border-color: rgba(0,0,0,.3);
  background: #bbb;
}

/* 绿色按钮 */
.a-button--green {
  color: #fff;
  background-image: linear-gradient(#8eb349, #5f7c22);
}

/* --primary 按钮 */
.a-button--pink {
  color: #fff;
  background-image: linear-gradient(#fbb2d0, #e779aa);
}
.a-button--pink:hover {
  background: linear-gradient(#f0b6ce, #f3b7d0);
  border-color: linear-gradient(#f0b6ce, #f3b7d0);
}
.a-button--pink:active {
  background-image: linear-gradient(#fbb2d0, #e779aa);
  border-color: linear-gradient(#fbb2d0, #e779aa);
}

.a-button--orange {
  color: #fff;
  background-image: linear-gradient(#f5c153, #ea920d);
}
</style>
