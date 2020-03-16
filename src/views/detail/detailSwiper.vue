<template>
    <div class="swiper-container filmswiper" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    props:{
        per:{
            default: 3
        },
        space: {
            default: 30
        },
        myclass: {
            default: '',
        }
    },
    mounted(){
        new Swiper('.'+ this.myclass, {
            
            slidesPerView: this.per,
            spaceBetween: this.space,
            freeMode: true,
        })
    }
}
</script>
<style scoped>
    img{width: 100%;}
</style>