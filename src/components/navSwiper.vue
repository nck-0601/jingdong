<template>
  <div class="navSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <Nav></Nav>
        </swiper-slide>
        <swiper-slide>
            <Nav></Nav>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>

import Nav from './Nav.vue'
export default {
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    components:{
        Nav,
    }
}
</script>

<style lang="less" src="../assets/less/navSwiper.less"></style>