
<script>
  export default {
      methods:{
            alert1(){
                this.$alert("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        }
                    }
                });
            },
            confirm1(){
                this.$confirm("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        } else if (action==='cancel') {
                            console.log("您点了取消")
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
            prompt1(){
                this.$prompt("内容","标题",{
                    callback:(action,val)=>{
                        if (action==='confirm'){
                            console.log("您点了确认",val)
                        } else if (action==='cancel') {
                            console.log("您点了取消",val)
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
            alert2(){
                this.$alert("内容","标题")
                    .then(res=>{
                        console.log(res);
                    }).catch(e=>{
                        console.error(e);
                    });
            },
            confirm2(){
                let res= this.$confirm("内容","标题")
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(e=>{
                        console.error(e);
                    });
            },
            prompt2(){
                let res= this.$prompt("内容","标题",{
                        inputPlaceholder:'请输入',
                        inputPattern:/aBc/,
                        inputErrorMessage:"aaaaaaaaaaaaaa"
                    })
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(e=>{
                        console.error(e);
                    });
            },
      }
  }
</script>
# MessageBox 消息框
----

### 基础用法
::: demo
```html
<div>
    <u-button type="info" @click="alert1()">alert(回调)</u-button>
    <u-button type="warning" @click="confirm1()" >confirm(回调)</u-button>
    <u-button type="primary" @click="prompt1()">prompt(回调)</u-button>
</div>

<script>
    export default {
        methods:{
            alert(){
                this.$alert("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        }
                    }
                });
            },
            confirm(){
                this.$confirm("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        } else if (action==='cancel') {
                            console.log("您点了取消")
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
            prompt(){
                this.$confirm("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        } else if (action==='cancel') {
                            console.log("您点了取消")
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
        }
    }
</script>
```
:::

### Promise

::: demo
```html
<div>
    <u-button type="info" @click="alert2()">alert(Promise)</u-button>
    <u-button type="warning" @click="confirm2()" >confirm(Promise)</u-button>
    <u-button type="primary" @click="prompt2()">prompt(Promise)</u-button>
</div>

<script>
    export default {
        methods:{
            alert2(){
                this.$alert("内容","标题")
                    .then(res=>{
                        console.log(res);
                    }).catch(e=>{
                        console.error(e);
                    });
            },
            confirm2(){
                let res= this.$confirm("内容","标题")
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(e=>{
                        console.error(e);
                    });
            },
            prompt2(){},
        }
    }
</script>
```
:::

### 回调
::: demo
```html
<div>
    <u-button type="info" @click="alert()">alert(回调)</u-button>
    <u-button type="warning" @click="confirm()" >confirm(回调)</u-button>
    <u-button type="primary" @click="prompt()">prompt(回调)</u-button>
</div>

<script>
    export default {
        methods:{
            alert(){
                this.$alert("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        }
                    }
                });
            },
            confirm(){
                this.$confirm("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        } else if (action==='cancel') {
                            console.log("您点了取消")
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
            prompt(){
                this.$confirm("内容","标题",{
                    callback:action=>{
                        if (action==='confirm'){
                            console.log("您点了确认")
                        } else if (action==='cancel') {
                            console.log("您点了取消")
                        }else if (action==='close') {
                            console.log("您点了关闭")
                        }
                    }
                });
            },
        }
    }
</script>
```
:::
