<template>
  <div id="app">    
    <keep-alive>
      <header-nav></header-nav>
    </keep-alive>    
    <router-view v-if="!$route.meta.keepAlive"></router-view>    
  </div>
</template>

<script>
import nav from './components/nav.vue';
export default {
  name: 'App',
  components: {
    headerNav: nav,
  }
}
</script>

<style>
html,body,#app {
  height: 100%;
  width: 100%;
}
body{}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;}
*{margin:0;padding:0;}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  list-type:none;
}
a {
  color: #42b983;
  text-decoration: none;
}
.nav{}
.navtext{text-align:center;font-size:20px;height:60px;line-height:60px;background:#fff;position:relative;z-index:999;}
.navicon,.close{width:20px;height:30px;position:absolute;top:0;right:10px;margin-top:15px;z-index:999;overflow:hidden;}
.navicon span,.close span{display:block;width:20px;height:2px;position:absolute;top:50%;left:0;transform-origin:center center;border-radius:2px;}
.close span{background:#000;}
.navicon span{background:#000;}
.navicon span:nth-child(1){margin-top:-8px;}
.navicon span:nth-child(2){margin-top:-1px;}
.navicon span:nth-child(3){margin-top:6px;}
.close span:nth-child(1){margin-top:-1px;transform:rotate(45deg);}
.close span:nth-child(2){display:none;}
.close span:nth-child(3){margin-top:-1px;transform:rotate(-45deg);}
.mask{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,0.8);}
.nav_list{position:absolute;top:60px;left:0;right:0;z-index:9999;display:flex;flex-flow:row wrap;padding:4px;}
.nav_list li{width:33.33%;position:relative;overflow:hidden;}
.nav_list li a{display:block;height:36px;line-height:36px;font-size:14px;color:#fff;border:solid 1px rgba(255,255,255,0.2);background:rgba(255,255,255,0.1);margin:2px;border-radius:20px;overflow:hidden;}
.nav_list2{position:relative;top:0;margin:0 0 0.8rem 0;z-index:0;overflow:hidden;background:#dedede;}
.nav_list2 li{}
.nav_list2 li a{font-size:0.4rem;color:#000;border-color:rgba(255,255,255,0.8);background:rgba(255,255,255,0.8);}
.banner{width:100%;position:relative;}
.banner img{display:block;width:100%;position:relative;z-index:0;}
.banner .bor{position:absolute;bottom:0;z-index:2;width:100%;text-align:center;}
.banner .bor span{display:inline-block;width:8px;height:8px;border-radius:100%;margin:0 4px;background:rgba(0,0,0,0.5);}
.banner .bor span.actives{background:rgba(255,255,255,1);}
.title1{padding:0.4rem 0;font-size:1rem;}
.title2{padding:0.2rem 0;font-size:0.8rem;}
.tit{text-align:center;padding:0.4rem 0;margin:0 0 0.5rem;font-size:20px;color:#f00;border-bottom:solid 1px #ccc;clear:both;}
.menu{padding:10px;overflow:hidden;}
.menu{display:flex;justify-content:center;}
.menu li{font-size:0.4rem;padding:0 0.2rem;display:inline;}
.active{box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);border-radius: 0.06rem;}
.list{overflow:hidden;}
.list li{width:25%;float:left;margin:0 0 10px;height:3rem;}
.pic{overflow:hidden;padding:0 5px;width:100%;height:2.5rem;box-sizing:border-box;}
.pic img{display:block;width:100%;height:100%;object-fit:cover;box-sizing:border-box;border:solid 2px #EBD043;border-radius:4px}
.name{padding:5px;font-size:0.3rem;color:#388DC4;}

.swiper-button-prev, .swiper-button-next{width:30px;height:30px;background:rgba(255,255,255,0.3);border-radius:30px;}
.swiper-button-prev:after{content:"";display:block;width:16px;height:16px;border:solid 1px #fff;border-right:solid 1px transparent;border-bottom:solid 1px transparent;transform: rotate(-45deg) scale(0.7);position:absolute;top:50%;left:50%;margin:-8px 0 0 -7px;}
.swiper-button-next:after{content:"";display:block;width:16px;height:16px;border:solid 1px #fff;border-top:solid 1px transparent;border-left:solid 1px transparent;transform: rotate(-45deg) scale(0.7);position:absolute;top:50%;right:50%;margin:-8px -7px 0 0;}

.viewer{margin:0 2%;overflow:hidden;}
.viewer_img{width:49%;margin:0 2% 0.2rem 0;float:left;}
.viewer_img:nth-of-type(2n){margin-right:0;}
.viewer img{display:block;width:100%;height:3rem;}

.radio,.checkbox{margin:0 0.6rem;}
</style>
