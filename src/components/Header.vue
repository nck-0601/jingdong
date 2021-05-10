<template>
  <div class="header flex j-s a-c" :class="{Scroll:isScroll}">
    <img src="../assets/img/header-left.png" class="header-left">
    <div class="search flex a-c">
      <img src="../assets/img/JD.png" class="jd">
      <div class="input flex a-c j-s">
        <div class="searchbtn"></div>
        <input type="text" class="searchinput" :placeholder="searchWords">
      </div>
    </div>
    <div class="login">登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
      searchWords:"diy主机",
    }
  },
  methods: {
      getscroll: function(){
        let top = document.documentElement.scrollTop
        //console.log(top);
        if (top!=0) {
            this.isScroll = true;
        }else{
          this.isScroll = false;
        }
        //console.log(this.isScroll);
      }
    },
    mounted() {
      window.addEventListener("scroll",this.getscroll)
    },
}
</script>

<style lang="less" src="../assets/less/header.less" scoped></style>