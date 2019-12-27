import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
// 懒加载方式
const Home =() => import('../views/home/Home')
const Cart =() => import('../views/cart/Cart')
Vue.use(Router)
const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router