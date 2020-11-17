<template>
  <div id="click">
    <h1 class="tit">@click</h1>
    <div class="click">
      <a href="javascript:" class="weui-btn weui-btn_primary" v-bind:class="{'class-a' : classA,'class-b':!classA}" @click="toggle">btn</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'click',
  data () {
    return {
      classA:false
    }
  },
  methods: {
    toggle:function(){
      this.classA=!this.classA;
    }
  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.p{width:300px;font-size:0.6rem;color:#000;padding:0.1rem;margin:auto;text-align:center;}
.class-a{box-shadow:0 0 20px 10px rgba(255,0,0,0.4);}
.class-b{box-shadow:0 0 40px 10px rgba(255,0,0,0.8);}
</style>
