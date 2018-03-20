<template>
  <div id="app">
    <topper></topper>
  </div>
</template>

<script>
import './js/common.js'
import './css/app.css'
import topper from './components/topper.vue'
export default {
  name: 'App',
  components:{
    topper:topper
  },
  data(){
    return {
      imgRootUrl:config.imgRootUrl
    }
  }
}
</script>
