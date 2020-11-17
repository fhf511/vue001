<template>
  <div id="newslist">
    <h1 class="tit">newslist</h1>
    <div class="newslist">
      <ul>
        <li v-for="newslist in newslists" :key="newslist.num">
          <router-link to="details">
            <div class="newslist_img"><img v-bind:src="newslist.img"></div>
            <div class="newslist_cont">
              <h2 class="newslist_tit">{{newslist.tit}}</h2>
              <p class="newslist_text">{{ newslist.text }}</p>
              <span class="newslist_time">{{newslist.time}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  data () {
    return {
      newslists:[
        {
          num:"0",
          img:require('../assets/banner1.jpg'),
          tit:"我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题",
          text:"我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述",
          time:"202-11-14"
        },
        {
          num:"1",
          img:require('../assets/banner1.jpg'),
          tit:"我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题",
          text:"我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述我是简述",
          time:"202-11-14"
        },
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.newslist ul{padding:10px;overflow:hidden;}
.newslist ul li{padding:10px 0;overflow:hidden;border-bottom:solid 1px #eee;}
.newslist_img{width:90px;height:90px;float:left;border:solid 1px #eee;margin:0 10px 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.newslist_img img{width:100%;height:100%;object-fit:cover;}
.newslist_cont{height:90px;overflow:hidden;position:relative;}
.newslist_tit{font-size:16px;color:#000;text-align:left;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.newslist_text{font-size:14px;color:#666;text-align:left;overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.newslist_time{font-size:12px;color:#999;position:absolute;bottom:0;left:0;}
</style>
