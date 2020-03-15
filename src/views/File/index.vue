<template>
<div>
  <nav>
    <router-link to="/film/nowPlaying" tag="span" class="now_fu">正在热映</router-link>
    <router-link to="/film/commingSoon" tag="span" class="now_fu">即将上映</router-link>
  </nav>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
 
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
</style>
