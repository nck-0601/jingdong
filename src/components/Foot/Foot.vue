<template>
  <div>
      <div class="foot flex">
          <div class="img flex j-c a-c" v-for="(item, index) in foot" :key="index">
              <router-link :to="item.to">
                <Foot-item :path="item.to">
                    <template #img1><div><img :src="item.img"></div></template>
                    <template #img2><div><img :src="item.current"></div></template>
                </Foot-item>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>

import FootItem from './FootItem'

export default {
    components:{
        FootItem,
    },
    data() {
        return {
            foot:[{
                    to:"/",
                    img:require("../../assets/img/foot1.png"),
                    current:require("../../assets/img/foot1-c.png"),
                },{
                    to:"/classify",
                    img:require("../../assets/img/foot2.png"),
                    current:require("../../assets/img/foot2-c.png"),
                },{
                    to:"/jx",
                    img:require("../../assets/img/foot3.png"),
                    current:require("../../assets/img/foot3.png"),
                },{
                    to:"/cart",
                    img:require("../../assets/img/foot4.png"),
                    current:require("../../assets/img/foot4-c.png"),
                },{
                    to:"/me",
                    img:require("../../assets/img/foot5.png"),
                    current:require("../../assets/img/foot5-c.png"),
                },],
        }
    },
}
</script>

<style lang="less" scoped src="../../assets/less/foot.less"></style>