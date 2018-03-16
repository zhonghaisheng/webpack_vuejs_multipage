<template>
  <div class="test">
    <h1>{{projectName}}</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'vue-test',
  props:['projectName'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
