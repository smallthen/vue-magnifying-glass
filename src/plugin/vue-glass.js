import vueGlass from './vue-glass.vue';
let glass = {};
glass.install = function (Vue, options) {
  Vue.prototype.$msg = 'vue-glass.vue';
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false;
    } else {
      arr = arr.join('');
      return arr;
    }
  }
  Vue.component(vueGlass.name, vueGlass);
};
export default glass;
