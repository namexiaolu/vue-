<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'Tabbar',

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


</style>
