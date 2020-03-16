<template>
<div class="cinema"  :style="myHeight">
  <ul>
    <li v-for=" li in list" :key=li.cinemaId>{{li.name}}</li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      list: [],
      myHeight: {
        height: '0px'
      }
    }
  },
  mounted(){
    this.myHeight.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3985094',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584235597777389081625","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      if(res.data.msg == 'ok'){
          this.list = res.data.data.cinemas
          this.$nextTick(() => {
            new BScroll('.cinema', {})
          })
      }
    })
  }
}
</script>
<style  scoped>
.cinema{
  overflow: hidden;
}
li{
  height: 20px;
}
</style>
