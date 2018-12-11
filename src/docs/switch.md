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

# Switch 开关
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
