<template>
  <div id="index">
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
    <h1 class="title1">{{ msg }}</h1>
    <h2 class="title2">{{titfl}}</h2>
    <div class="tabmenu">
    <ul class="menu">
      <li @click="cur=0" :class="{active:cur==0}"><a href="javascript:;">法师</a></li>
      <li @click="cur=1" :class="{active:cur==1}"><a href="javascript:;">战士</a></li>
      <li @click="cur=2" :class="{active:cur==2}"><a href="javascript:;">刺客</a></li>
      <li @click="cur=3" :class="{active:cur==3}"><a href="javascript:;">坦克</a></li>
      <li @click="cur=4" :class="{active:cur==4}"><a href="javascript:;">辅助</a></li>
      <li @click="cur=5" :class="{active:cur==5}"><a href="javascript:;">射手</a></li>
    </ul>
    </div>
    <h2 class="title2">{{tityx}}</h2>
    <div class="tabmain" id="viewer">
      <ul class="list" id="list1" v-show="cur==0" >
        <li v-for="item in items0" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="list" id="list2" v-show="cur==1">
        <li v-for="item in items1" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="list" id="list3" v-show="cur==2">
        <li v-for="item in items2" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="list" id="list4" v-show="cur==3">
        <li v-for="item in items3" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="list" id="list5" v-show="cur==4">
        <li v-for="item in items4" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <ul class="list" id="list6" v-show="cur==5">
        <li v-for="item in items5" :key="item.pic">
          <a href="javascript:;">
            <div class="pic">
              <img v-bind:src="item.src" alt="">              
            </div>
            <p class="name">{{ item.name }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
  name: 'index',
  data () {
    return {
      msg: '王者荣耀',
      titfl:"职业",
      tityx:"英雄",
      mark: 0, 
      show:false,
      isA: true,
      cur:0,
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
      items0: [
        { 
          pic:'0',
          src:require('../assets/images/yingxiong/1-1.jpg'),
          name: '王昭君', 
        },
        { 
          pic:'1',
          src:require('../assets/images/yingxiong/1-2.jpg'),
          name: '甄姬', 
        },
        { 
          pic:'2',
          src:require('../assets/images/yingxiong/1-3.jpg'),
          name: '张良', 
        },
        { 
          pic:'3',
          src:require('../assets/images/yingxiong/1-4.jpg'),
          name: '貂蝉', 
        },
        { 
          pic:'4',
          src:require('../assets/images/yingxiong/1-5.jpg'),
          name: '安其拉', 
        },
        { 
          pic:'5',
          src:require('../assets/images/yingxiong/1-6.jpg'),
          name: '妲己', 
        },
        { 
          pic:'6',
          src:require('../assets/images/yingxiong/1-7.jpg'),
          name: '女娲', 
        },
        { 
          pic:'7',
          src:require('../assets/images/yingxiong/1-8.jpg'),
          name: '武则天', 
        },
        { 
          pic:'8',
          src:require('../assets/images/yingxiong/1-9.jpg'),
          name: '米莱迪', 
        },
        { 
          pic:'9',
          src:require('../assets/images/yingxiong/1-10.jpg'),
          name: '诸葛亮', 
        },
        { 
          pic:'10',
          src:require('../assets/images/yingxiong/1-11.jpg'),
          name: '干将莫邪', 
        },
        { 
          pic:'11',
          src:require('../assets/images/yingxiong/1-12.jpg'),
          name: '上官婉儿', 
        },
      ],
      items1: [
        { 
          pic:'0',
          src:require('../assets/1.jpg'),
          name: '程咬金', 
        },
      ],
      items2: [
        { 
          pic:'0',
          src:require('../assets/1.jpg'),
          name: '韩信', 
        },
        { 
          pic:'1',
          src:require('../assets/2.jpg'),
          name: '赵云', 
        },
      ],
      items3: [
        { 
          pic:'0',
          src:require('../assets/1.jpg'),
          name: '夏侯惇', 
        },
        { 
          pic:'1',
          src:require('../assets/2.jpg'),
          name: '廉颇', 
        },
        { 
          pic:'2',
          src:require('../assets/1.jpg'),
          name: '猪八戒', 
        },
      ],
      items4: [
        { 
          pic:'0',
          src:require('../assets/1.jpg'),
          name: '大乔', 
        },
        { 
          pic:'1',
          src:require('../assets/2.jpg'),
          name: '东皇太一', 
        },
        { 
          pic:'2',
          src:require('../assets/1.jpg'),
          name: '盾山', 
        },
        { 
          pic:'3',
          src:require('../assets/2.jpg'),
          name: '刘禅', 
        },
      ],
      items5: [
        { 
          pic:'0',
          src:require('../assets/1.jpg'),
          name: '艾琳', 
        },
        { 
          pic:'1',
          src:require('../assets/2.jpg'),
          name: '伽罗', 
        },
        { 
          pic:'2',
          src:require('../assets/1.jpg'),
          name: '黄忠', 
        },
        { 
          pic:'3',
          src:require('../assets/2.jpg'),
          name: '后羿', 
        },
        { 
          pic:'4',
          src:require('../assets/1.jpg'),
          name: '鲁班七号', 
        },
      ]
    }
  },
  methods: {  
    autoPlay () {  
      this.mark++;  
      if (this.mark === 2) {
        this.mark = 0  
      }  
    },  
    play () {  
      setInterval(this.autoPlay, 2000)  
    },  
    change (i) {  
      this.mark = i  
    },
    showCont:function(){
      this.show = !this.show;
      this.hidden = !this.hidden;
      this.isA = !this.isA
    }, 
  },  
  created () {  
    this.play(); 
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

    const ViewerDom1 = document.getElementById('list1');
    const list1 = new Viewer(ViewerDom1, {
      // 相关配置项,详情见下面
    });

    const ViewerDom2 = document.getElementById('list2');
    const list2 = new Viewer(ViewerDom2, {
      // 相关配置项,详情见下面
    });

    const ViewerDom3 = document.getElementById('list3');
    const list3 = new Viewer(ViewerDom3, {
      // 相关配置项,详情见下面
    });

    const ViewerDom4 = document.getElementById('list4');
    const list4 = new Viewer(ViewerDom4, {
      // 相关配置项,详情见下面
    });

    const ViewerDom5 = document.getElementById('list5');
    const list5 = new Viewer(ViewerDom5, {
      // 相关配置项,详情见下面
    });

    const ViewerDom6 = document.getElementById('list6');
    const list6 = new Viewer(ViewerDom6, {
      // 相关配置项,详情见下面
    });
  }
}
</script>

<style scoped>

</style>
