<template>
  
    <div class="tab-bar-item">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div>
        <slot :class="{active: isActive}" name="item-text"></slot>
      </div>
      
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
        </div>
  
</template>

<script>
export default {
  name:'TabBarItem',
  data(){
    return{
      isActive: true,
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
.tab-bar-item .active{
  color: red;
}

</style>