<style>
.u-check-box{
  margin-right: 10px;
}
</style>

<script>
  export default {
      data() {
        return {
          checked1:false,
          checked2:true,
          checked3:false,
          checked4:false,
          checked5:false,
          checked6:true,
          checked7:false,
          checked8:false,
        };
      }
    }
  </script>

# CheckBox 复选框
----
### 基础用法

::: demo
```html
<div>
    <u-check-box v-model="checked1"></u-check-box>
    <u-check-box v-model="checked2"></u-check-box>
    <u-check-box v-model="checked3" :indeterminate="true"></u-check-box>
    <u-check-box v-model="checked4" label="使用label"></u-check-box>
    <u-check-box v-model="checked5">写在标签里面</u-check-box>
    <u-check-box v-model="checked6" disabled>已选中禁用</u-check-box>
    <u-check-box v-model="checked7" disabled>未选中禁用</u-check-box>
</div>

<script>
  export default {
      data() {
        return {
          checked1:false,
          checked2:true,
          checked3:false,
          checked4:false,
          checked5:false,
          checked6:true,
          checked7:false,
        };
      }
    }
  </script>

```
:::

### 可变文字



::: demo
```html
<div>
    <u-check-box v-model="checked8" true-label="已选中" false-label="未选中"></u-check-box>
</div>

<script>
  export default {
      data() {
        return {
          checked8:false,
        };
      }
    }
  </script>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| indeterminate     | 尺寸   | string  |   default,medium,small            |    —     |
| label     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| disabled     | 是否朴素按钮   | Boolean    | — | false   |
| true-label  | 是否禁用状态    | boolean   | —   | false   |
| false-label  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
