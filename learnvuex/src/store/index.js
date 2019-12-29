import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
  state:{
    counter:1000,
    student:[
      {id:1,name:'xiaolu',age:10},
      {id:2,name:'fanfan',age:12},

    ]
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    
    incrementcount(state,counter){
      state.counter += counter
    },
    addStu(state,stu){
      state.student.push(stu)
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    }
  },
  actiions:{

  },

})
export default store