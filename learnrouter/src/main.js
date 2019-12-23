import Vue from 'vue'
import App from './App'
import router from './router'
// 导入的目录如果光写目录没有写具体文件，会自动找index文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
