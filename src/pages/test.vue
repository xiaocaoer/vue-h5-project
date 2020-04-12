<template>
  <div>
    <span>测试路由组件</span>
    <span>{{test}}</span>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
 name:"test",
 computed:{
   ...mapState(["test"])
 }
}
</script>

<style scoped>

</style>