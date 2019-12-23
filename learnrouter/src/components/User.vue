<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面，哈哈哈哈哈</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name : 'User',
  computed: {
    userId(){
      return this.$route.params.abc
      // 这个abc可以随便起名字，和index中的对应就行啦。
    }
  },
  // created(){
  //   console.log('this is created');
  //   document.title = '用户'
  // }
}
</script>

<style>

</style>
