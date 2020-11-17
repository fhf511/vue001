<template>
  <div id="time_daojishi">
    <h1 class="tit">倒计时</h1>
    <div class="time_daojishi">      
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn">我是按钮</a>
      <div class="cont">
        <p class="p" v-if="show">点击按钮开始倒计时<span>{{ times }}</span>s</p>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'time_daojishi',
  data () {
    return {
      times: 5,
      show:true
    }
  },
  methods: {
    btn() {
      this.timer = setInterval(()=>{
        this.times--
        if(this.times===0){
          clearInterval(this.timer);
        }
      },1000)
    }
  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto 0;}
.cont{border:solid 1px #333;border-radius:10px;overflow:hidden;line-height:40px;padding:0.3rem;margin:20px;}
.p{font-size:0.6rem;color:#000;text-align:center;}
.p span{color:#f00;padding:0 10px;}
</style>
