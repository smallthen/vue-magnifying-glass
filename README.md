<<<<<<< HEAD
# vue-glass

> A Vue.js project

## Build Setup

``` bash
=======

vue放大镜组件
------


>>>>>>> fa11f068124d74387830b50c234be6c46ac07813
npm i vue-magnifying-glass
------

```
<template>
    <div>
        <Mag :mag="mag"> </Mag>
    </div>
</template>

import Vue from 'vue'
import Mag from '../plugin/vue-glass.js'
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



```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
