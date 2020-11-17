<template>
  <div id="img0">
    <h1 class="tit">图片</h1>
    <div class="img">
      <h1 class="tit">静态图片</h1>
      <img src="../assets/banner1.jpg">
      <img src="../assets/banner1.jpg">      
      <h1 class="tit">调用图片</h1>
      <img :src="img" >
      <img :src="img" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'img0',
  data () {
    return {
      img:require('../assets/banner1.jpg'), 
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.img img{width:50%;height:100px;}
</style>
