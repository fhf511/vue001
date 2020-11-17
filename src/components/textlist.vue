<template>
  <div id="textlist">
    <h1 class="tit">textlist</h1>
    <div class="textlist">
      <ul>
        <li v-for="textlist in textlists" :key="textlist.num">
          <p class="textlist_text">{{textlist.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textlist',
  data () {
    return {
      textlists:[
        {
          num:"0",
          text:"大江东去浪淘尽，千古风流人物，人道是，三国周郎赤壁，乱石穿空，惊涛拍岸，卷起千堆雪。"
        },
        {
          num:"1",
          text:"怒发冲冠凭栏处，潇潇雨歇，抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月，莫等闲，白了少年头，空悲切。"
        },
        {
          num:"2",
          text:"我欲乘风归去，又恐琼楼玉宇，高处不胜寒"
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.textlist{padding:10px;}
.textlist ul li{padding:10px 0;border-bottom:solid 1px #eee;}
.textlist_text{font-size:14px;color:#666;text-align:left;}
</style>
