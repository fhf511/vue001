<template>
  <div id="transition00">
    <h1 class="tit">transition</h1>
    <div class="transition00">
      <div class="demo">
        <a href="javascript:" class="weui-btn weui-btn_primary" v-on:click = "show = !show">按钮</a>
        <transition name = "fade">
            <p v-show = "show" v-bind:style = "styleobj">动画实例</p>
        </transition>
      </div>
      <div class="demo">
        <a href="javascript:" class="weui-btn weui-btn_primary" v-on:click = "one = !one">按钮</a>
        <transition name = "in-fade">
            <p v-show="one" v-bind:style = "styleobj">动画实例</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transition00',
  data () {
    return {
      show:true,
      one:true,
      styleobj :{
          fontSize:'30px',
          color:'red'
      }
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
.demo{height:200px;}
input{height:30px;margin:auto;}
p{font-size:0.3rem;padding:40px;margin:0 auto 40px;text-align:center;}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to{
    opacity:0;
}




.in-fade-enter-active, .in-fade-leave-active {
    animation:inplay 1s linear;
}
@keyframes inplay{
  0%{transform:translate(0);}
  25%{transform:translate(-100px);}
  50%{transform:translate(0);}
  75%{transform:translate(100px);}
  100%{transform:translate(0);}
}
.in-fade-enter, .in-fade-leave-to{

}
</style>
