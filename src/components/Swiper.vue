<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in bannerList" :key="index">
            <img :src="bannerList[index]">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          autoplay:{
              delay:3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
          }
        },
        bannerList:[require("../assets/banner/banner1.png"),
                    require("../assets/banner/banner2.png"),
                    require("../assets/banner/banner3.png"),
                    require("../assets/banner/banner4.png"),
                    require("../assets/banner/banner5.png"),
                    require("../assets/banner/banner6.png")]
      }
    },
}
</script>
<style type="text/css">
  .swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    background: hsla(0,0%,100%,.6);
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    background-color: #FA2C19;
  }
</style>
<style lang="less" src="../assets/less/swiper.less" scoped></style>