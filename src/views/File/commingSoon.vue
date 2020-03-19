<template>
<div>
   <ul>
       <!-- <li v-for=" item in $store.getters.filterComming" :key=item.filmId> -->
       <li v-for=" item in $store.state.commingSoon" :key=item.filmId>
            <img :src="item.poster" alt="">
          <p>{{item.name}}</p>
          <p>观众评分：<span class="grade">{{item.grade}}</span></p>
          <p>主演:{{item.director}}</p>
          <!-- <p class="dot">演员{{item.actors | getAct}}</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
          <button class="buy">购票</button> -->
       </li>
   </ul>
</div>
</template>

<script>
export default {
data() {
return {

}
},
mounted(){
    if (this.$store.state.commingSoon.length === 0){
        // 发ajax
        this.$store.dispatch('getCommingAction')
    }
}
}
</script>
<style  scoped>
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