<template>
  <div id="app">
    <Mag :mag="mag"></Mag>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Mag from '@/components/mag'

export default Vue.extend({
  name: 'App',
  components:{
    Mag
  },
  data(){
    return{
      mag:{
        imgWidth:346,   //图片宽度
        imgHeight:392,  //图片高度
        markWidth:173,  //遮罩宽度
        markHeight:230,  //遮罩高度
        bigWidth:600,   //大图的宽度
      }
    }
  }
})
</script>

<style>
*{margin:0;padding: 0;font-family:"Microsoft YaHei",SimSun,sans-serif,HELVETICA;;box-sizing:border-box;}
html,body,div,img{margin:0;padding:0;border:0;}
</style>
