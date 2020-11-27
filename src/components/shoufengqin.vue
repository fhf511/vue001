<template>
  <div id="shoufengqin">
    <h1 class="tit">手风琴效果</h1>
    <div class="shoufengqin">
      <vsa-list>
        <vsa-item>
          <vsa-heading>
            大鸽子
          </vsa-heading>
          <vsa-content>
            大鸽子会飞
          </vsa-content>
        </vsa-item>
        <vsa-item>
          <vsa-heading>
            大鸭子
          </vsa-heading>
          <vsa-content>
            大鸭子会游泳
          </vsa-content>
        </vsa-item>
        <vsa-item>
          <vsa-heading>
            大狗
          </vsa-heading>
          <vsa-content>
            大狗会看家
          </vsa-content>
        </vsa-item>
      </vsa-list>
    </div>
  </div>
</template>


<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
 
// 导入样式表
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
export default {
  name: 'shoufengqin',
  data () {
    return {
      
    }
  },
  mounted(){
    
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  },
  props:{
    tags: {
      list: "dl",
      list__item: "div",
      item__heading: "dt",
      heading__content: "span",
      heading__icon: "span",
      item__content: "dd"
    },
    roles: {
      presentation: false,
      heading: false,
      region: true
    },
    transition: "vsa-collapse",
    initActive: false,
    forceActive: undefined,
    autoCollapse: true,
    onHeadingClick: () => {},
    navigation: true
  }
}
</script>

<style>/*scoped*/
.vsa-list {max-width:none !important;}
.vsa-item__trigger{background:#123 !important;padding:5px 10px !important;}
.vsa-item__trigger__content{color:#fff !important;font-size:18px !important;}
.vsa-item__content{font-size:14px !important;color:#333 !important;padding:10px !important;transition:none !important;}
.vsa-item__trigger__icon{transform:scale(0.6) !important;}
.vsa-item__trigger__icon:before,.vsa-item__trigger__icon:after{background:#fff !important;}
</style>
