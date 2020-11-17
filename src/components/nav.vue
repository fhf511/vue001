<template>
  <div id="nav">
    <div class="nav">
      <p class="navtext">vue</p>
      <a href="javascript:;" :class="{'navicon':isA,'close':!isA}" @click="showCont"><span></span><span></span><span></span></a>
      <ul class="nav_list" v-if="show">
        <li @click="navsub"><router-link to="/">首页</router-link></li>
        <li @click="navsub"><router-link to="img">图片</router-link></li>
        <li @click="navsub"><router-link to="imglist">图片列表</router-link></li>
        <li @click="navsub"><router-link to="text">text</router-link></li>
        <li @click="navsub"><router-link to="textlist">textlist</router-link></li>
        <li @click="navsub"><router-link to="newslist">newslist</router-link></li>
        <li @click="navsub"><router-link to="newslist2">newslist2</router-link></li>
        <li @click="navsub"><router-link to="banner">banner</router-link></li>
        <li @click="navsub"><router-link to="banner1">banner1</router-link></li>
        <li @click="navsub"><router-link to="nav">nav</router-link></li>
        <li @click="navsub"><router-link to="viewer">viewer</router-link></li>
        <li @click="navsub"><router-link to="tab">tab切换</router-link></li>
        <li @click="navsub"><router-link to="echarts">echarts</router-link></li>
        <li @click="navsub"><router-link to="select">select</router-link></li>
        <li @click="navsub"><router-link to="input">input</router-link></li>
        <li @click="navsub"><router-link to="textarea">textarea</router-link></li>
        <li @click="navsub"><router-link to="radio">radio</router-link></li>
        <li @click="navsub"><router-link to="checkbox">checkbox</router-link></li>
        <li @click="navsub"><router-link to="weui">weui</router-link></li>
        <li @click="navsub"><router-link to="weui_Dialog">weui_Dialog</router-link></li>
        <li @click="navsub"><router-link to="weui_Half_screen_Dialog">weui_Half_screen_Dialog</router-link></li>
        <li @click="navsub"><router-link to="click">click</router-link></li>
        <li @click="navsub"><router-link to="setTimeout">setTimeout</router-link></li>
        <li @click="navsub"><router-link to="time_daojishi">time_daojishi</router-link></li>
        <li @click="navsub"><router-link to="addClass">addClass</router-link></li>
        <li @click="navsub"><router-link to="classtoggle">class切换</router-link></li>
        <li @click="navsub"><router-link to="transition">transition</router-link></li>
        <li @click="navsub"><router-link to="login">login</router-link></li>
        <li @click="navsub"><router-link to="details">details</router-link></li>
        <li @click="navsub"><router-link to="details2">details2</router-link></li>
      </ul>
      <div class="mask" v-if="show"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show:false,
      isA: true
    }
  },
  methods: {
    showCont:function(){
      this.show = !this.show;
      this.hidden = !this.hidden;
      this.isA = !this.isA;
    },
    navsub:function(){
      this.show = !this.show;
      this.hidden = !this.hidden;
      this.isA = !this.isA;
    },
  },
}
</script>

<style scoped>


</style>
