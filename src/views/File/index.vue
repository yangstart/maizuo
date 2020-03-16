<template>
<div>
  <swiper :key=list.length ref="myswiper">
      <div class="swiper-slide" v-for="i in list" :key="i.id"><img :src="i.url" alt=""></div>
  </swiper>
  <nav :class="isFixed?'fixed': '' ">
    <router-link to="/film/nowPlaying" tag="span" class="now_fu">正在热映</router-link>
    <router-link to="/film/commingSoon" tag="span" class="now_fu">即将上映</router-link>
  </nav>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

</div>
</template>

<script>
import swiper from './swiper'
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      isFixed: false
    }
  },
  mounted() {
    setTimeout(() => {}, 3000)
    this.list = [
            {"id": 1, "url": "http://kwimg1.kuwo.cn/star/upload/6/40/1584244870962_.jpg"},
            {"id": 2, "url": "http://kwimg1.kuwo.cn/star/upload/26/71/1584245134025_.jpg"},
            {"id": 3, "url": "http://kwimg1.kuwo.cn/star/upload/26/71/1584245134025_.jpg"},
            {"id": 4, "url": "http://kwimg4.kuwo.cn/star/upload/47/52/1557311466098_.png"}
        ]
      window.onscroll = this.handleScroll
  },
  beforeDestroy(){
    window.onscroll = null
  },
  methods:{
    handleScroll(){
      var nowT = document.documentElement.scrollTop;
      var sT = this.$refs.myswiper.$el.offsetHeight
      if(nowT>=sT){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    }
  },
  components: {
    swiper
  }
}
</script>
<style scoped>

.router-link-active{
color: orange;
border-bottom: 2px solid orange;
}
nav{
  display: flex;
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
}
.now_fu{
  flex: 1;
  text-align: center;
  
}
.fixed{
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background: white;
}
</style>
