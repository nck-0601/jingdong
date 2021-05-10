<template>
  <div>
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index" class="float">
        <router-link :to="item.url">
          <ul>
              <li class="flex j-c">
                  <img :src="item.img">
              </li>
              <li>
                  {{ item.title }}
              </li>
          </ul>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navList:[{
                title:"京东超市",
                url:"/parmas/京东超市页面",
                img:require('../assets/sprites/img1.webp'),
            },{
                title:"数码电器",
                url:"/parmas/数码电器页面",
                img:require('../assets/sprites/img2.webp')
            },{
                title:"京东服饰",
                url:"/parmas/京东服饰页面",
                img:require('../assets/sprites/img3.webp')
            },{
                title:"京东生鲜",
                url:"/parmas/京东生鲜页面",
                img:require('../assets/sprites/img4.webp')
            },{
                title:"京东到家",
                url:"/parmas/京东到家页面",
                img:require('../assets/sprites/img5.webp')
            },{
                title:"充值缴费",
                url:"/parmas/充值缴费页面",
                img:require('../assets/sprites/img6.webp')
            },{
                title:"9.9元拼",
                url:"/parmas/9.9元拼页面",
                img:require('../assets/sprites/img7.webp')
            },{
                title:"领券",
                url:"/parmas/领券页面",
                img:require('../assets/sprites/img8.webp')
            },{
                title:"领金贴",
                url:"/parmas/领金贴页面",
                img:require('../assets/sprites/img9.webp')
            },{
                title:"PLUS会员",
                url:"/parmas/PLUS会员页面",
                img:require('../assets/sprites/img10.webp')
            },]
        }
    },
}
</script>

<style lang="less" scoped src="../assets/less/nav.less"></style>