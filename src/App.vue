<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
}

@media screen and (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    border-radius: 2px;
  }
  /*滚动条样式*/
  :hover::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    border-radius: 3px;
  }
  :hover::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: var(--option-scrollbar-radius);
    background: #e7e4e4;
    border-radius: 3px;
  }
  :hover::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:active {
    background-color: #a1a1a1;
    border-radius: 3px;
  }
  :hover::-webkit-scrollbar-track {/*滚动条里面轨道*/
    background: var(--option-scrollbar-track-bg);
    border-radius: 3px;
  }
}
@media screen and (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
  }
}

</style>
