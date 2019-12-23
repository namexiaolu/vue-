import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import VueRouter from 'vue-router'
// 注册插件
Vue.use(Router)


// 定义路由
const routes = [
  //  这个特殊的东西，要么放在最上面，要么放在最下面。方便找。  
  {
      path:'',
      // 重定向
      redirect:'/home'
    },
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path :'/About',
      // name:'About',
      component: About,
      meta:{
        title : '关于'
      }
    },
    {
      path:'/home',
      // name:'Home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path : '/User/:abc',
      component: User,
      meta:{
        title:'用户'
      }
    }
]

// 创建路由实例
const router = new VueRouter({
  routes,
  mode : 'history'
})
router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title
  next()
})

// 导出router实例
export default router

