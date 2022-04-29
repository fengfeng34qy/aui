<template>
  <div class="layout">
    <div class="header">
      <div>Aui组件库</div>
      <a class="github" href="https://github.com/fengfeng34qy/aui" target="_bank">
        <img class="header-github-ico" src="../../static/images/favicon.png" alt="">
      </a>
    </div>
    <div class="content">
      <div class="content-left">
        <div class="alink-box"><a class="content-alink" href="#" @click="getPage('install')">安装</a></div>
        <div class="alink-box"><a class="content-alink" href="#" @click="getPage('quickstart')">快速上手</a></div>
        <div class="alink-box"><a class="content-alink" href="#" @click="getPage('a-box')">a-box</a></div>
        <div class="alink-box"><a class="content-alink" href="#" @click="getPage('a-text')">a-text</a></div>
        <div class="alink-box"><a class="content-alink" href="#" @click="getPage('a-row')">layout布局</a></div>
      </div>
      <div class="content-right">
        <transition name='page' mode="out-in" @after-enter='onNavigated'>
          <keep-alive>
            <component ref="currentPage" :is="currentPage" v-on:pageChange="custompage($event)">
            </component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from '../utils'

export default {
  name: 'layout',
  data() {
    return {
      currentPage: undefined,
      page: null
    }
  },
  /**
   * 使用async需要安装babel-plugin-transform-runtime包，并配置.babelrc "plugins":["transform-runtime"] 开发环境
   */
  async created() {},
  async mounted() {
    /**
     * 使用import语法需要安装syntax-dynamic-import包，并配置.babelrc "plugins":["syntax-dynamic-import"] 开发环境
     */
    // let currentPage = await import('../a-box.vue');  // 老写法，后面封装了this.getPage方法
    // console.log(currentPage);
    // this.currentPage = currentPage.default;

    // 初始化加载a-box
    this.getPage('install');
  },
  methods: {
    onNavigated() {},
    async getPage(pageName) {
      let currentPage = await Utils.getPageAsync(pageName);
      this.currentPage = currentPage;
    },
    custompage(page) {
      this.currentPage = page;
    }
  }
}
</script>
<style scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  position: fixed;
  box-sizing: border-box;
  background: #fff;
}
.content {
  margin-top: 80px;
  height: calc(100% - 80px);
}
.content-right {
  padding: 0 20px;
}
.content-left, .content-right {
  
}

.alink-box {
  text-align: center;
  font-weight: bold;
}
.content-alink {
  color: #000;
  text-decoration:none;
  display: block;
  height: 40px;
  line-height: 40px;
  width: 100%;
}
.content-alink:hover {
  color: #409eff;
}
.github {
  position: absolute;
  right: 24px;
  top: 0;
  top: 24px;
  height: 32px;
  display: flex;
}
.header-github-ico {
  vertical-align: middle;
}

/* pc端 */
@media screen and (min-width: 768px) {
  .content {
    flex: 1;
    display: flex;
  }
  .content-left {
    flex: 3;
    border-right: 1px solid #ccc;
    overflow: scroll;
  }
  .content-right {
    flex: 7;
    overflow: scroll;
  }
  .content-left, .content-right {
    height: 100%;
    overflow: scroll;
  }
}

/* 移动端 */
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .content-left {
    height: 300px;
  }
  .content-left, .content-right {
    /* max-height: calc(100% - 80px); */
    border-right: none;
  }
}
</style>