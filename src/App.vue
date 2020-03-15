<template>
  <div>
    <keep-alive>
       <router-view></router-view>
    </keep-alive>

    <tab-bar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  components: {
    tabBar
  }
}
</script>
<style>
  *{
    margin: 0; 
    padding: 0;
  }
  html, body{
    height: 100%;
    width: 100%;
    /* overflow: hidden; */
  }
  ul, li{
    list-style: none;
  }
</style>