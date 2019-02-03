<template>
  <div class="demo">
    <div class="small" @mouseenter="enter" @mousemove="move" @mouseleave="leave">
      <img :src="magSrc" alt="" class="img">
      <div class="mark" v-show="mouseOn"></div>
      <div class="big" v-show="mouseOn"><img :src="magSrc" alt="" class="bigImg"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import avatar from '@/assets/logo.png'

  // declare function require(string):string;
  const avatar=require('@/assets/logo.png');

  export default Vue.extend({
    name: 'mag',
    props:{
      magSrc:{
        default:avatar
      },
      mag:{
        default:{
          imgWidth:346,
          imgHeight:392,
          markWidth:173,
          markHeight:196,
          bigWidth:692,
        }
      }
    },
    data () {
      return {
        mouseOn:false
      }
    },
    mounted(){
      this.basic();
    },
    computed:{
      demo(){
        return document.querySelector(".demo");
      },
      small(){
        return document.querySelector(".small");
      },
      mark(){
        return document.querySelector(".mark");
      },
      big(){
        return document.querySelector(".big");
      },
      bigImg(){
        return document.querySelector(".bigImg");
      },
    },
    methods:{
      basic(){
      },
      enter(){
        this.mouseOn=true;
      },
      move(e:any){
        let imgWidth:number=this.mag.imgWidth;
        let imgHeight:number=this.mag.imgHeight;
        let markWidth:number=this.mag.markWidth;
        let markHeight:number=this.mag.markHeight;
        let bigWidth:number=this.mag.bigWidth;
        let bigHeight:number=bigWidth*markHeight/markWidth;
        let demo:any=this.demo;
        let small:any=this.small;
        let mark:any=this.mark;
        let big:any=this.big;
        let bigImg:any=this.bigImg;


        small.style.width=imgWidth+'px';
        small.style.height=imgHeight+'px';

        mark.style.width=markWidth+'px';
        mark.style.height=markHeight+'px';

        big.style.width=bigWidth+'px';
        big.style.height=bigHeight+'px';
        big.style.left=imgWidth+'px';

        bigImg.style.width=bigWidth*imgWidth/markWidth+'px';
        bigImg.style.height=bigHeight*imgHeight/markHeight+'px';

        let left:number=e.clientX
          -demo.offsetLeft
          -small.offsetLeft
          -markWidth/2;
        let top:number=e.clientY-demo.offsetTop-small.offsetTop-markHeight/2;
        if(left<0){left=0};
        if(top<0){top=0};
        if(left>imgWidth-markWidth){
          left=imgWidth-markWidth;
        }
        if(top>imgHeight-markHeight){
          top=imgHeight-markHeight;
        }
        mark.style.left=left+"px";
        mark.style.top=top+"px";

        bigImg.style.left=-mark.offsetLeft*bigImg.offsetWidth/imgWidth+"px";
        bigImg.style.top=-mark.offsetTop*bigImg.offsetHeight/imgHeight+"px";
      },
      leave(){
        this.mouseOn=false;
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    display: block;
    width:100%;
    height:100%;
  }
  .small{
    width:346px;
    height:392px;
    border:1px solid #333;
    position: relative;
  }
  .mark{
    position: absolute;
    margin: auto;
    border:1px solid #eee;
    background: rgba(0,0,0,.4);
    cursor: move;
  }
  .big{
    border:1px solid #333;
    position: absolute;
    top:0;
    left:346px;
    margin: auto;
    overflow: hidden;
  }
  .big img{
    position: absolute;
    margin: auto;
  }
</style>
