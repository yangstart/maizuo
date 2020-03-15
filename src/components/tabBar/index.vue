<template>
<nav>
    <ul>
        <!-- to = name   情况下， active样式无效 -->
        <router-link tag="li" to="/film"><i class="iconfont iconzixun"></i>电影</router-link>
        <router-link tag="li" to="/cinema"><i class="iconfont icondianying"></i>影院</router-link>
        <router-link tag="li" to="/Info"><i class="iconfont iconzixun"></i>资讯</router-link>
        <router-link tag="li" to="/center"><i class="iconfont iconwode"></i>我的</router-link>
    </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.router-link-active{
    color:orangered;
}
nav{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height: 50px;
}
nav ul{
    display: flex;
}
nav ul li{
    flex: 1;
    line-height: 50px;
    text-align: center;
    color: gray;
}

</style>
