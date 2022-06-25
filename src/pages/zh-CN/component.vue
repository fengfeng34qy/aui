<style>
</style>
<template>
  <!-- <el-scrollbar class="page-component__scroll" ref="componentScrollBar"> -->
  <!-- <div class="page-container page-component"> -->
    <!-- <el-scrollbar class="page-component__nav">
      <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
    </el-scrollbar> -->
    <div class="page-component__content">
      <main-header></main-header>
      <!-- <div>
        <router-link to="/zh-CN/component/button">按钮</router-link>
      </div> -->
      <div class="content">
        <!-- <div class="left">
          <div><router-link to="/zh-CN/component/installation">安装</router-link></div>
          <div><router-link to="/zh-CN/component/quickstart">快速上手</router-link></div>
          <div><router-link to="/zh-CN/component/layout">Layout 布局</router-link></div>
          <div><router-link to="/zh-CN/component/button">button 按钮</router-link></div>
        </div> -->
        <side-nav class="left" :data="navsData['zh-CN']" :base="`/${ 'zh-CN' }/component`"></side-nav>
        <router-view class="right"></router-view>
      </div>
      <!-- <footer-nav></footer-nav> -->
    </div>
    <!-- <el-backtop 
      v-if="showBackToTop"
      target=".page-component__scroll .el-scrollbar__wrap"
      :right="100"
      :bottom="150"
    ></el-backtop> -->
  <!-- </div> -->
  <!-- </el-scrollbar> -->
</template>
<script>
  // import bus from '../../bus';
  import navsData from '../../router/nav.config.json';
  import throttle from 'throttle-debounce/throttle';

  export default {
    data() {
      return {
        navsData
      };
    },
    methods: {
      renderAnchorHref() {
        if (/changelog/g.test(location.href)) return;
        const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
        const basePath = location.href.split('#').splice(0, 2).join('#');

        [].slice.call(anchors).forEach(a => {
          const href = a.getAttribute('href');
          a.href = basePath + href;
        });
      },

      goAnchor() {
        if (location.href.match(/#/g).length > 1) {
          const anchor = location.href.match(/#[^#]+$/g);
          if (!anchor) return;
          const elm = document.querySelector(anchor[0]);
          if (!elm) return;

          setTimeout(_ => {
            this.componentScrollBox.scrollTop = elm.offsetTop;
          }, 50);
        }
      },

      handleScroll() {
        const scrollTop = this.componentScrollBox.scrollTop;
        if (this.showHeader !== this.scrollTop > scrollTop) {
          this.showHeader = this.scrollTop > scrollTop;
        }
        if (scrollTop === 0) {
          this.showHeader = true;
        }
        if (!this.navFaded) {
          bus.$emit('fadeNav');
        }
        this.scrollTop = scrollTop;
      }
    },
    computed: {
      showBackToTop() {
        return !this.$route.path.match(/backtop/);
      }
    },
    created() {
      // bus.$on('navFade', val => {
      //   this.navFaded = val;
      // });
    },
    mounted() {
      this.componentScrollBar = this.$refs.componentScrollBar;
      // this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
      this.throttledScrollHandler = throttle(300, this.handleScroll);
      // this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
      this.renderAnchorHref();
      this.goAnchor();
      document.body.classList.add('is-component');
    },
    destroyed() {
      document.body.classList.remove('is-component');
    },
    beforeDestroy() {
      this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
    },
    beforeRouteUpdate(to, from, next) {
      next();
      setTimeout(() => {
        const toPath = to.path;
        const fromPath = from.path;
        if (toPath === fromPath && to.hash) {
          this.goAnchor();
        }
        if (toPath !== fromPath) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          this.renderAnchorHref();
        }
      }, 100);
    }
  };
</script>
<style scoped>
.page-component__content {
  width: 100%;
}
.content {
  display: flex;
  margin-top: 80px;
  height: calc(100% - 80px);
}
.left {
  flex: 3;
  overflow-y: auto;
  box-sizing: border-box;
}
.right {
  flex: 7;
  overflow-y: auto;
  box-sizing: border-box;
}
/* 移动端 */
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .right {
    padding: 0 10px;
    overflow-y: initial;
  }
  .left {
    overflow-y: initial;
  }
}
</style>
