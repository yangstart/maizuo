<template>
    <div v-if="list">
      <img  :src="list.poster" alt="" class="poster">
      <h2>{{list.name}}</h2>
      <h2>演职人员</h2>
      <swiper :key=list.length+1 per=3 myclass="yi" class="yi">
        <div class="swiper-slide" v-for="a in list.actors" :key=a.name>
          <img :src="a.avatarAddress" alt="">
          <p>{{a.name}}</p>
        </div>
      </swiper>
      <h2>剧照</h2>
      <swiper :key="list.length" per=5 space=10 myclass="er" class="er">
        <div class="swiper-slide" v-for="(p, index) in list.photos" :key=index>
          <img :src="p" alt="">
        </div>
      </swiper>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from './detailSwiper'
import {SHOWMUTATION} from '@/type'

// import bus from '@/bus'
export default {
  data(){
    return {
      list: []
    }
  },
  components: {swiper},
 beforeMount(){
    // this.$store.state.barIsShow=false
    this.$store.commit(SHOWMUTATION, false)
 },
  
  mounted () {
    var id = this.$route.params.id
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=2131728`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584235597777389081625"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      if(res.data.msg === 'ok'){
        this.list = res.data.data.film
      }
    })
  },
  beforeDestroy() {
    // this.$store.state.barIsShow=true
    this.$store.commit(SHOWMUTATION, true)
  },

}
</script>
<style>
  .poster{
    width: 100%;
  } 
</style>
