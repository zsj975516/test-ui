<template>
  <div id="app">
    <router-view class="app-router-view"/>
  </div>
</template>

<style lang="scss">
  @import "../packages/theme-default/index";

  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;
    .app-router-view {
      height: 100%;
    }
  }

  .code_inline {
    background-color: #ececec;
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .hljs-tag {
    color: #000080;
    /*font-weight: bold;*/
    .hljs-name {
      color: #000080;
    }
    .hljs-attr {
      color: #0036f9;
    }
    .hljs-string {
      color: #008000;
    }
  }

  .demo-table {
    border-collapse: separate;
    border-spacing: 0 0;
    /*border: 1px solid #ccc;*/
    font-size: 18px;
    width: 90%;
    margin: 0 auto;
    thead {
      background-color: #e9e9e9;
      tr {
        height: 50px;
        th {

        }
      }
    }
    tbody {
      tr {
        td {
          padding: 15px 5px;
          border-top: 1px solid #ccc;
        }
      }
    }
  }
</style>
