const math = require('./js/mathUtils')

console.log('hello Webpack');
console.log(math.add(1,2));
console.log(math.mul(2,3));

// 依赖css文件
require('./css/normal.css');
// 使用vue开发

import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el:'#app',
  template:`<App/>`,
  components:{
    App
  }
})