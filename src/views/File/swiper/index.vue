<template>
    <div class="swiper-container filmswiper" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    mounted(){
        new Swiper('.filmswiper', {
            // loop: true,
            //  direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 2000
            },
            pagination:{
                el: '.swiper-pagination',
            }
        })
    }
}
</script>
<style scoped>
    img{width: 100%;}
    .filmswiper .swiper-pagination{
    text-align: right;
  
}

</style>