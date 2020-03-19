<template>
  <div>
     <router-view></router-view>
      <tab-bar v-show="barIsShow"></tab-bar>
      
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
import bus from '@/bus'
import {mapState} from 'vuex'
export default {
   data(){
     return {
      
     }
   },
  components: {
    tabBar
  },
  // computed: {
  //   isShow(){
  //     return this.$store.state.barIsShow
  //   }
  // }

  // computed: mapState(['barIsShow'])
  computed: { ...mapState(['barIsShow']),}


  // beforeMount(){
  //   bus.$on('barShow', (data) => {
  //     this.isShow = data
  //   })
  // }
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