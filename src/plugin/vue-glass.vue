<template>
  <div class="demo">
    <div
      class="small"
      @mouseenter="enter"
      @mousemove="move"
      @mouseleave="leave"
      :style="{width:mag.imgWidth+ 'px',height:mag.imgHeight+ 'px'}"
    >
      <img
        :src="magSrc"
        alt=""
        class="img"
      >
      <div
        class="mark"
        v-show="mouseOn"
        :style="{width:mag.markWidth+ 'px',height:mag.markHeight+ 'px',left:markLeft+'px',top:markTop+'px'}"
      ></div>
      <div
        class="big"
        v-show="mouseOn"
        :style="{width:mag.bigWidth+ 'px',height:mag.bigWidth*mag.markHeight/mag.markWidth+ 'px',left:bigLeft+'px'}"
      >
        <img
          :src="magSrc"
          v-show="mouseOn"
          alt=""
          class="bigImg"
          :style="imgStyle"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Mag",
  props: {
    magSrc: {
      default: "https://cn.vuejs.org/images/logo.png"
    },
    mag: {
      default: {
        imgWidth: 250,
        imgHeight: 300,
        markWidth: 100,
        markHeight: 100,
        bigWidth: 500
      }
    }
  },
  data() {
    return {
      mouseOn: false,
      markLeft: 0,
      markTop: 0,
      bigImgLeft: 0,
      bigImgTop: 0,
      bigHeight: 0,
      bigLeft: 0
    };
  },
  mounted() {
    this.basic();
  },
  computed: {
    imgStyle() {
      return {
        width:
          (this.mag.bigWidth * this.mag.imgWidth) / this.mag.markWidth + "px",
        height:
          (this.bigHeight * this.mag.imgHeight) / this.mag.markHeight + "px",
        left: this.bigImgLeft + "px",
        top:  this.bigImgTop + "px"
      };
    },
    demo() {
      return document.querySelector(".demo");
    },
    small() {
      return document.querySelector(".small");
    },
    mark() {
      return document.querySelector(".mark");
    },
    bigImg() {
      return document.querySelector(".bigImg");
    }
  },
  methods: {
    basic() {
      let bigHeight =
        (this.mag.bigWidth * this.mag.markHeight) / this.mag.markWidth;
      this.bigHeight = bigHeight;
      this.bigLeft = this.mag.imgWidth;
    },
    enter() {
      this.mouseOn = true;
    },
    move(e) {
      const markWidth = this.mag.markWidth;
      const markHeight = this.mag.markHeight;
      const demo = this.demo;
      const small = this.small;
      const mark = this.mark;
      const bigImg = this.bigImg;
      let left = e.clientX - getOffsetRect(demo).left - markWidth / 2;
      let top = e.clientY - getOffsetRect(demo).top - markHeight / 2;
      if (left < 0) {
        left = 0;
      } else if (left > this.mag.imgWidth - this.mag.markWidth) {
        left = this.mag.imgWidth - this.mag.markWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > this.mag.imgHeight - this.mag.markHeight) {
        top = this.mag.imgHeight - this.mag.markHeight;
      }
      this.markLeft = left;
      this.markTop = top;
      this.bigImgLeft =
        (-mark.offsetLeft * this.bigImg.offsetWidth) / this.mag.imgWidth;
      this.bigImgTop =
        (-mark.offsetTop * this.bigImg.offsetHeight) / this.mag.imgHeight;
      function getOffsetRect(ele) {
        let box = ele.getBoundingClientRect();
        let body = document.body,
          docElem = document.documentElement;
        let scrollTop =
            window.pageYOffset || docElem.scrollTop || body.scrollTop,
          scrollLeft =
            window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        let clientTop = docElem.clientTop || body.clientTop,
          clientLeft = docElem.clientLeft || body.clientLeft;
        let top = box.top + scrollTop - clientTop,
          left = box.left + scrollLeft - clientLeft;
        return {
          top: Math.round(top),
          left: Math.round(left)
        };
      }
    },
    leave() {
      this.mouseOn = false;
    }
  }
};
</script>
<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
.small {
  border: 1px solid #333;
  position: relative;
}
.mark {
  position: absolute;
  margin: auto;
  border: 1px solid #eee;
  background: rgba(0, 0, 0, 0.4);
  cursor: move;
}
.big {
  border: 1px solid #333;
  position: absolute;
  top: 0;
  margin: auto;
  overflow: hidden;
}
.big img {
  position: absolute;
  margin: auto;
}
</style>
