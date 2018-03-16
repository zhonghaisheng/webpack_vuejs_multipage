<template>
  <div id="app">
    <img :src="imgRootUrl+'logo.png'">
    <router-link to="/routerTest">routerTest</router-link>
    <router-view/>
    
  </div>
</template>

<script>
// import './js/common.js'
// import './css/app.css'
export default {
  name: 'App',
  data(){
    return {
      imgRootUrl:config.imgRootUrl
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
