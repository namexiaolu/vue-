<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addStu">addStu</button>


    <button @click="addddd(5)">+5</button>
    <button @click="addddd(10)">+10</button>

    <h2>-------------App   getters相关内容------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>


    <h2>stu增加</h2>
    <h2>{{$store.state.student}}</h2>
    
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/Hellovuex'

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message:'我是App组件',
      counter:0
    } 
  },
  methods:{
    add() {
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addddd(counter){
      this.$store.commit('incrementcount',counter)
    },
    addStu(){
      const stu = {id:3,name:'xiaoming'};
      this.$store.commit('addStu',stu)
    }
  }
}
</script>

<style>

</style>
