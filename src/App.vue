<template>
  <div id="app">
     外卖APP
     <router-view></router-view>
  </div>
</template>

<script>
import axios  from 'axios'
export default {
  name: 'App',
  async mounted(){
    // console.log('111')
    let result=  await this.$http.seller.getSeller()
    console.log(result)
  }
}
</script>

<style>

</style>
