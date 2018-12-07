<style>
.u-switch{
  margin-right: 10px;
}
</style>

<script>
  export default {
      data() {
        return {
            checked1:false,
            checked2:true,
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
    <u-switch v-model="checked1"></u-switch>
    <u-switch v-model="checked2" text-position="left" true-label="开" false-label="关"></u-switch>
    <u-switch v-model="checked1" text-position="right" true-label="开" false-label="关"></u-switch>
    <u-switch v-model="checked2" text-position="inner" true-label="开" false-label="关"></u-switch>
    <u-switch v-model="checked2" text-position="inner" disabled true-label="开" false-label="关"></u-switch>
</div>

<script>
  export default {
      data() {
        return {
            checked1:false,
            checked2:true,
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
