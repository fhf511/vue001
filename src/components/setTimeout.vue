<template>
  <div id="setTimeout">
    <h1 class="tit">setTimeout</h1>
    <div class="setTimeout">
      <p class="p" @click="text1">{{ message1 }}</p>
      <p class="p" @click="text2">{{ message2 }}</p>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn1">btn1</a>
      <p class="p">{{ message3 }}</p>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn2">btn2</a>
      <p class="p">{{ message4 }}</p>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn3">btn3</a>
      <p class="p" v-if="show">{{ message5 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setTimeout',
  data () {
    return {
      message1: '11111111',
      message2: '2222222',
      message3: '我是p标签原来的内容',
      message4: '我是原来的内容',
      message5: '我显示出来了,4秒钟后我还会消失',
      show:false,
    }
  },
  methods: {
    text1: function () {  
      let text10=this
      setTimeout(function()  { 
        text10.message1 = '1a1a1a1a11a' 
      }, 2000);      
    },

    text2: function () {  
      let text20=this
      setTimeout(function()  { 
        text20.message2 = '2b2b2b2b2b2' 
      }, 2000);      
    },

    btn1: function () {
      let text30=this
      setTimeout(function()  { 
        text30.message3 = '我是改变后的p标签的内容' 
      }, 2000);  
    },

    btn2: function () {
      let text40=this
      setTimeout(function()  { 
        text40.message4 = '请注意：我是改变后的内容,2s后我会消失' 
      }, 2000);
      setTimeout(function()  { 
        text40.message4 = '' 
      }, 4000);  
    },

    btn3: function () {
      this.show = !this.show;
      let text50=this
      setTimeout(function()  { 
        text50.show = false;
      }, 4000);  
    }
  }
}
</script>

<style scoped>
.p{font-size:0.3rem;padding:0.3rem;color:#000;margin:auto;text-align:center;}
</style>
