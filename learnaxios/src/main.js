import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   // console.log(res);
  
// })
// // 全局请求和配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:4
//   }
// })])
//   .then(result =>{
//     console.log(result);
    
//   })
// - 创建对应的axios的实例
const instance1 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})

instance1({
  url:'/home/multidata'
}).then(res =>{
  console.log(res);
  
})

const instance2 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:3000
})