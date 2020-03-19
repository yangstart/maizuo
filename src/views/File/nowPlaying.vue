<template>
  <div>
    <ul >
      <!-- <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li> -->
      <li v-for="(item,index) in list" :key="index" @click="handle(item.filmId)">
          <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    handle (id) {
      // 编程式导航
      this.$router.push(`/detail/${id}`)
    // 命名路由
    //   this.$router.push({ name: 'detail', params: { id: id } })
    }
  },
   filters:{
    getAct(act){
      var newlist = act.map(item => item.name)
      return newlist.join(' ')
    }
  },
  mounted(){
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6991079',
        headers:{
             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584235597777389081625","bc":"110100"}',
             'X-Host': 'mall.film-ticket.film.list'
        }
       
    }).then(res => {
        if(res.data.msg == 'ok'){
            this.list = res.data.data.films
        }
    })
  },

}
</script>
<style>
    .grade{
        color: orange;
    }
    ul li{
        height: 200px;
        color: gray;
        padding: 10px;
    }
    ul li img{ width: 100px; display: block; float: left;margin-right: 10px;}
    ul li p{font-size: 15px; padding: 5px;}
    ul li .buy{float: right; color: orange; border: 1px solid orange; border-radius: 5px; background: transparent;}
    ul li p.dot{white-space:nowrap; overflow: hidden;text-overflow: ellipsis;}
</style>
