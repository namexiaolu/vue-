<template>
  
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot  name="item-icon"></slot></div>
      <div  v-else><slot name="item-icon-active"></slot></div>
      <!-- 此处包裹一个div的目的是防止slot被替换之后，active属性一起被替换，然后效果不生效 -->
      <!-- <div :class="{active: isActive}">
        <slot name="item-text"></slot>
      </div> -->
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
      
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
        </div>
  
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      // 这个不能写死，因为需要点击哪个哪个变红
      // isActive:true
      
    }
  },
  computed:{
    isActive(){
      // indexOf用法：有没有在前边找到后面，没找到返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      console.log('itemclick');
      this.$router.push(this.path)
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

</style>