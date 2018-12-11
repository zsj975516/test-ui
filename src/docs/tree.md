
# Tree 树
----
### 基础用法

::: demo
```html
 <div class="tree">
    <u-tree :data="data" :show-checkbox="true" :highlight-current="true"></u-tree>
</div>

<script>
  import {data} from '../data/data'
  import {getTreeData} from '../util/util'

  export default {
    data() {
      const _data=getTreeData(data);
      console.log(_data)
      return {
        data: _data
      }
    },
  }
</script>

<style>
.tree{
    max-height: 300px;
    width: 300px;
    overflow-y: auto;
}
</style>

```
:::
