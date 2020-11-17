<template>
  <div id="viewer">
    <h1 class="tit">viewer图片放大</h1>
    <h1 class="tit">viewer1</h1>
    <ul class="viewer" id="viewer1">
      <li v-for="item in items" :key="item.viewer" class="viewer_img"><img v-bind:src="item.src" alt=""> </li>
    </ul>
    <h1 class="tit">viewer2</h1>
    <ul class="viewer" id="viewer2">
      <li v-for="item in items2" :key="item.viewer" class="viewer_img"><img v-bind:src="item.src" alt=""> </li>
    </ul>
  </div>
</template>
<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

export default {
  name: '',
  data () {
    return {
      items: [
        { 
          viewer:'0',
          src:require('../assets/banner1.jpg'), 
        },
        { 
          viewer:'1',
          src:require('../assets/banner2.jpg'),
        },
        { 
          viewer:'3',
          src:require('../assets/banner3.jpeg'), 
        },
        { 
          viewer:'4',
          src:require('../assets/banner4.jpg'),
        },
        { 
          viewer:'5',
          src:require('../assets/banner5.jpeg'), 
        },
      ],
      items2: [
        { 
          viewer:'6',
          src:require('../assets/banner6.jpg'),
        },
        { 
          viewer:'7',
          src:require('../assets/banner7.jpeg'), 
        },
        { 
          viewer:'8',
          src:require('../assets/banner8.jpg'),
        },
      ],
    }
  },
  mounted(){
      const ViewerDom = document.getElementById('viewer1');
      const viewer1 = new Viewer(ViewerDom, {
        // 相关配置项,详情见下面
      });
      const ViewerDom2 = document.getElementById('viewer2');
      const viewer2 = new Viewer(ViewerDom2, {
        // 相关配置项,详情见下面
      });
    }
}
</script>

<style scoped>


</style>
