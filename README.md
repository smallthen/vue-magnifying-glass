vue放大镜组件
------
npm i vue-magnifying-glass
------

```
<template>
    <div>
        <Mag :mag="mag"> </Mag>
    </div>
</template>

import Vue from 'vue'
import Mag from 'vue-magnifying-glass'
Vue.use(Mag)

export default {
    data () {
        return {
            mag:{
              imgWidth:250,   //图片宽度
              imgHeight:300,  //图片高度
              markWidth:100,  //遮罩宽度
              markHeight:100,  //遮罩高度
              bigWidth:500,   //大图的宽度
            },
              // magSrc:''    //图片地址
        }
    }
}
```
