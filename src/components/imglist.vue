<template>
  <div id="imglist">
    <h1 class="tit">图片列表</h1>
    <ul class="list">
      <li v-for="item in items0" :key="item.pic">
        <a href="javascript:;">
          <div class="pic">
            <img v-bind:src="item.src" alt="">              
          </div>
          <p class="name">{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'imglist',
  data () {
    return {
      items0: [
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
          name: '艾琳', 
        },
        { 
          pic:'3',
          src:require('../assets/2.jpg'),
          name: '伽罗', 
        },
        { 
          pic:'4',
          src:require('../assets/1.jpg'),
          name: '艾琳', 
        },
        { 
          pic:'5',
          src:require('../assets/2.jpg'),
          name: '伽罗', 
        },
        { 
          pic:'6',
          src:require('../assets/1.jpg'),
          name: '艾琳', 
        },
        { 
          pic:'7',
          src:require('../assets/2.jpg'),
          name: '伽罗', 
        },
      ]
    }
  },
  methods: {  
    
  },    
}
</script>

<style scoped>


</style>
