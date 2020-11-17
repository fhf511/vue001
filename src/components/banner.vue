<template>
  <div id="banner">
    <h1 class="tit">图片切换</h1>
    <div class="banner">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../assets/banner1.jpg"></div>
              <div class="swiper-slide"><img src="../assets/banner2.jpg"></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
export default {
  name: 'banner',
  data () {
    return {

    }
  },
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
    })
  }
}
</script>

<style scoped>


</style>
