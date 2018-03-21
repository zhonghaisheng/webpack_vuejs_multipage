<template>
  <div id="app">
    <topper></topper>
  </div>
</template>

<script>
import './js/common.js'
import './css/app.css'
import topper from './components/topper.vue'

import axios from 'axios'
import qs from 'qs'
export default {
  name: 'App',
  components:{
    topper:topper
  },
  data(){
    return {
      imgRootUrl:config.imgRootUrl
    }
  },
  mounted:function(){
    axios.post('/api/onlyFloorMaster',qs.stringify({id:1})).then(function(res){
      console.log(res.data.status);
    })
    .catch(function(err){
      console.log(err);
    })
  }
}
</script>
