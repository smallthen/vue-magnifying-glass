<template>
  <div>
    <Mag :mag="mag"> </Mag>
  </div>
</template>

<script>
import Vue from "vue";
import Mag from "../plugin/vue-glass.js";
Vue.use(Mag);
export default {
  data() {
    return {
      mag: {
        imgWidth: 250, //图片宽度
        imgHeight: 300, //图片高度
        markWidth: 100, //遮罩宽度
        markHeight: 100, //遮罩高度
        bigWidth: 500 //大图的宽度
      }
    };
  },
  components: {}
};
</script>