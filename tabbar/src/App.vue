<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
        <tab-bar-item path="/home" activeColor="yellow">
          <!-- 通过插槽插过来 -->
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" >
          <img slot="item-icon-active" src="./assets/img/tabbar/homeactive.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item>
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor='blue'>
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/homeactive.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item>
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
// 上边想用tabbar和tabbaritem标签的话，需要在这里导入，并且在组件中注册。
import Tabbar from './components/tabbar/Tabbar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    Tabbar,
    TabBarItem
  },
  
}
</script>

<style>
/* 在style中引用base.css */
@import "./assets/css/base.css";


</style>
