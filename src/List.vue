<template>
  <div id="list">
    <img :src="imgRootUrl+'logo.png'">
    <!--测试组件-->
    <vue-test :projectName="projectName"></vue-test>
  </div>
</template>

<script>
import './css/list.css'
import VueTest from './components/vueTest.vue'
import $ from 'jquery'
//使用vuex状态管理器
import store from './store/store.js'

export default {
  name: 'List',
  store:store,
  data(){
    return {
      imgRootUrl:config.imgRootUrl,
      projectName:'vueTest'
    }
  },
  components:{
    VueTest:VueTest
  },
  created:function(){
    console.log(this.$store.state.count);
    this.$store.commit('incrementNew',10);
    console.log(this.$store.state.count);
  }
}
</script>

<style>
#list {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
