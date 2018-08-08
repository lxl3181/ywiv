<template>
  <div id="app">
    <router-view/>
    <Spin :size="size" :transfer="transfer" fix v-if="$store.state.isLoading">
      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
      <div>加载中...</div>
    </Spin>
  </div>
</template>

<script>
import { Icon, Spin } from 'iview'
export default {
  name: 'App',
  data () {
    return {
      size: 'default',
      transfer: true
    }
  },
  components: {
    Icon,
    Spin
  }
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
</style>
