<template>
  <div class="home">
    <div class="button_box">
      <u-button type="primary" @click="quickStart">文档</u-button>
      <u-button  @click="test">测试</u-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      quickStart() {
        this.$router.push('/doc');
      },
      test() {
        this.$router.push('/test');
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    background-color: #cccccc;
    text-align: center;
    position: relative;

    .button_box {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 200px;
      height: 50px;
    }
  }
</style>
