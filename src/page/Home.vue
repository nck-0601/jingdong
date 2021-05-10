<template>
  <div class="all">
    <Bg></Bg>
    <Header></Header>
    <Swiper></Swiper>
    <nav-swiper></nav-swiper>
    <Foot></Foot>
  </div>
</template>

<script>
import Bg from '../components/bg'
import Header from '../components/Header'
import NavSwiper from '../components/navSwiper.vue'
import Swiper from '../components/Swiper'
import Foot from '../components/Foot/Foot'

export default {
    components:{
        Header,
        Swiper,
        Bg,
        NavSwiper,
        Foot,
    },
}
</script>

<style scoped>
.all{
  position: relative;
  width: 375px;
  margin: 0 auto;
}
</style>