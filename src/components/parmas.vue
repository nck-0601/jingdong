<template>
  <div>
      <div class="page">
        <h1>{{ show }}</h1>
        <router-link to="/" tag="button">返回主页</router-link>
      </div>
  </div>
</template>

<script>
export default {
  props:["title",],
  data() {
    return {
      show:"",
    }
  },
  mounted() {
    //console.log(this.$route.params.title)
    this.show = this.$route.params.title
  },
}
</script>

<style scoped>
.page {
  margin: 10px auto;
  text-align: center;
}
.page button {
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #C82519;
}
</style>