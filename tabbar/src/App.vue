<template>
  <div id="app">
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

/* 定位到底部 */
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;

/* 阴影 */
box-shadow: 0 -1px 1px rgba(190, 115, 115, 0.1)

}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>
