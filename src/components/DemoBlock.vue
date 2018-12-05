<template>
  <div class="docs-demo-wrapper">
    <div class="code_render">
      <slot name="desc"></slot>
    </div>
    <div :style="{maxHeight: isExpand ? '700px' : '0'}" class="demo-container">
      <div class="docs-demo">
        <div class="highlight-wrapper">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
    <div
      class="docs-trans docs-demo__triangle"
      @click="isExpand=!isExpand">{{isExpand ? '隐藏代码' : '显示代码'}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "DemoBlock",
    data() {
      return {
        isExpand: false,
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .docs-demo-wrapper {
    .code_render {
      border: 1px solid #ccc;
      padding: 20px;
    }
    .demo-container {
      overflow: hidden;
      transition-duration: 500ms;
      .docs-demo {
        background-color: #f7f7f7;
        padding: 20px;

        .highlight-wrapper {
          font-size: 20px;
          font-family: Consolas;

          & > div > pre {
            margin: 0;
          }
        }
      }
    }
    .docs-demo__triangle {
      text-align: center;
      background-color: #e3f3ff;
      height: 30px;
      line-height: 30px;
      color: #55daff;
      cursor: default;
    }
  }
</style>
