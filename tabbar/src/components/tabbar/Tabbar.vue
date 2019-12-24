<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">
        <!-- <img src="../../assers/img/tabbar/1.jpg" alt=""> -->
        首页
        </div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>

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
