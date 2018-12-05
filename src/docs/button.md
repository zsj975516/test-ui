<style>
.u-button{
  margin-right: 10px;
}
</style>

# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

::: demo
```html
<div>
    <u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="info" >信息按钮</u-button>
    <u-button type="warning" >警告按钮</u-button>
    <u-button type="danger">危险按钮</u-button>
</div>
<div class="top-m-10">
    <u-button plain>朴素按钮</u-button>
    <u-button type="primary" plain>朴素按钮</u-button>
    <u-button type="success" plain>朴素按钮</u-button>
    <u-button type="info" plain>朴素按钮</u-button>
    <u-button type="warning" plain>朴素按钮</u-button>
    <u-button type="danger" plain>朴素按钮</u-button>
</div>
<div class="top-m-10">
    <u-button round>朴素按钮</u-button>
    <u-button type="primary" round>圆角按钮</u-button>
    <u-button type="success" round>圆角按钮</u-button>
    <u-button type="info" round>圆角按钮</u-button>
    <u-button type="warning" round>圆角按钮</u-button>
    <u-button type="danger" round>圆角按钮</u-button>
</div>
```
:::

### 禁用状态

使用```disabled```属性来使按钮不可用。

::: demo
```html
<div>
  <u-button disabled>默认按钮</u-button>
  <u-button type="primary" disabled>主要按钮</u-button>
  <u-button type="success" disabled>成功按钮</u-button>
  <u-button type="info" disabled>信息按钮</u-button>
  <u-button type="warning" disabled>警告按钮</u-button>
  <u-button type="danger" disabled>危险按钮</u-button>
</div>
<div class="top-m-10">
  <u-button plain disabled>朴素按钮</u-button>
  <u-button type="primary" plain disabled>主要按钮</u-button>
  <u-button type="success" plain disabled>成功按钮</u-button>
  <u-button type="info" plain disabled>信息按钮</u-button>
  <u-button type="warning" plain disabled>警告按钮</u-button>
  <u-button type="danger" plain disabled>危险按钮</u-button>
</div>
```
:::


### 不同尺寸

通过设置```size```属性来改变按钮的大小，可选值有：```small```、```normal```、```medium```、```large```。

::: demo
```html
<div>
    <u-button size="small">小型按钮</u-button>
    <u-button>默认尺寸</u-button>
    <u-button size="medium">中等按钮</u-button>
    <u-button size="large">大按钮</u-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
