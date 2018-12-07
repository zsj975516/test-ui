<template>
  <div class="doc">
    <div class="header">

    </div>
    <div class="container">
      <div class="nav">
        <div class="nav_item" :class="{active:isCurrent(item)}" @click="navItemClick(item)"
             v-for="item in list">
          {{item.name}}
        </div>
      </div>
      <router-view class="doc-router-view"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'doc',
    data() {
      return {
        currPath: '',
      }
    },
    components: {},
    created() {
      this.currPath = this.currentPath;
    },
    props: {
      list: Array,
      currentPath: String,
    },
    methods: {
      navItemClick(item) {
        this.currPath = item.path;
        this.$router.push(item.path);
      },
      isCurrent(item) {
        let re = new RegExp(item.path + '\/?$');
        return re.test(this.currPath);
      }
    }
  }
</script>
<style scoped lang="scss">
  $header_height: 80px;
  $nav_width: 200px;
  .doc {
    .header {
      background-color: #cccccc;
      height: $header_height;
    }
    .container {
      height: calc(100% - #{$header_height});
      .nav {
        display: inline-block;
        width: $nav_width;
        height: 100%;
        background-color: #3faaf5;
        vertical-align: top;
        overflow-y: auto;
        .nav_item {
          background-color: #79cc8b;
          font-size: 20px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: white;
          cursor: default;
          &.active, &:hover {
            background-color: #a1d5ff;
          }
        }
      }
      .doc-router-view {
        height: 100%;
        width: calc(100% - #{$nav_width});
        display: inline-block;
        vertical-align: top;
        overflow-y: auto;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
</style>
