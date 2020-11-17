<template>
  <div id="banner">
    <h1 class="tit">图片切换</h1>
    <div class="banner">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in items" :key="item.banner">
                <img v-bind:src="item.src" alt=""> 
              </div>
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
      items: [
        { 
          banner:'0',
          src:require('../assets/banner1.jpg'), 
        },
        { 
          banner:'1',
          src:require('../assets/banner2.jpg'),
        },
        { 
          banner:'3',
          src:require('../assets/banner3.jpeg'), 
        },
        { 
          banner:'4',
          src:require('../assets/banner4.jpg'),
        },
        { 
          banner:'5',
          src:require('../assets/banner5.jpeg'), 
        },
        { 
          banner:'6',
          src:require('../assets/banner6.jpg'),
        },
        { 
          banner:'7',
          src:require('../assets/banner7.jpeg'), 
        },
        { 
          banner:'8',
          src:require('../assets/banner8.jpg'),
        },
      ],
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
