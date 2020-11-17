<template>
  <div id="addClass">
    <h1 class="tit">点击按钮给p标签添加删除class</h1>
    <div class="addClass">
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn">添加class</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn1">删除class</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn2">添加删除class</a>
      <p v-bind:class="{ 'text': isActive }">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addClass',
  data () {
    return {
      text:"大江东去浪淘尽",
      isActive:false,
    }
  },
  methods: {
      btn: function() {
          this.isActive = true;
      },
      btn1: function() {
          this.isActive = false;
      },
      btn2: function() {
          this.isActive = !this.isActive
      },
  }
}
</script>

<style scoped>
a,input{text-decoration:none;border:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
a:focus,input:focus{text-decoration:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
input{width:300px;height:30px;padding:0 10px;margin:auto;background:transparent;border-radius:20px;color:#000;border:solid 2px #000;}
p{font-size:0.5rem;color:#000;padding:0.4rem 0;margin:0 20px;text-align:center;border:solid 2px #000;}
.text{color:#f00;border:solid 2px #f00;
animation:pplay 3s linear infinite;
}
@keyframes pplay{
  0%{border-radius:50px 0 0 0;}
  25%{border-radius:0 50px 0 0;}
  50%{border-radius:0 0 50px 0;}
  75%{border-radius:0 0 0 50px;}
  100%{border-radius:50px 0 0 0;}
}
.weui-btn{margin:0 auto 30px}

</style>
