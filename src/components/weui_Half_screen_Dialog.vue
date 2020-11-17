<template>
  <div id="weui_Half_screen_Dialog">
    <h1 class="tit">weui_Half_screen_Dialog</h1>
    <div class="weui">
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont1">按钮1</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont2">按钮2</a>
      <!--BEGIN dialog1-->
        <div class="js_dialog" id="iosDialog1" v-if="show1">
            <div class="weui-mask" @click="showCont1"></div>
            <div id="js_dialog_1" v-bind:class="{ 'weui-half-screen-dialog_show': isActive }" class="weui-half-screen-dialog">
                <div class="weui-half-screen-dialog__hd">
                  <div class="weui-half-screen-dialog__hd__side">
                    <button class="weui-icon-btn" @click="showCont1">关闭<i class="weui-icon-close-thin"></i></button>
                  </div>
                  <div class="weui-half-screen-dialog__hd__main">
                    <strong class="weui-half-screen-dialog__title">标题</strong>
                  </div>
                </div>
                <div class="weui-half-screen-dialog__bd">
                  <br>
                  <br>
                  可放自定义内容11
                  <br>
                  <br>
                  <br>
                  <br>
                </div>
            </div>
        </div>
        <!--END dialog1-->
        <!--BEGIN dialog2-->
        <div class="js_dialog" id="iosDialog2" v-if="show2">
            <div class="weui-mask" @click="showCont2"></div>
            <div id="js_dialog_2" v-bind:class="{ 'weui-half-screen-dialog_show': isActive }" class="weui-half-screen-dialog">
                <div class="weui-half-screen-dialog__hd">
                  <div class="weui-half-screen-dialog__hd__side">
                    <button style="display: none;" class="weui-icon-btn">返回<i class="weui-icon-back-arrow-thin"></i></button>
                    <button class="weui-icon-btn" @click="showCont2">关闭<i class="weui-icon-close-thin"></i></button>
                  </div>
                  <div class="weui-half-screen-dialog__hd__main">
                    <strong class="weui-half-screen-dialog__title">标题</strong>
                    <span class="weui-half-screen-dialog__subtitle">标题</span>
                  </div>
                  <div class="weui-half-screen-dialog__hd__side">
                    <button class="weui-icon-btn">更多<i class="weui-icon-more"></i></button>
                  </div>
                </div>
                <div class="weui-half-screen-dialog__bd">
                  <p class="weui-half-screen-dialog__desc">
                    辅助描述内容，可根据实际需要安排
                  </p>
                  <p class="weui-half-screen-dialog__tips">
                    辅助提示内容，可根据实际需要安排
                  </p>
                </div>
                <div class="weui-half-screen-dialog__ft">
                    <a href="javascript:" class="weui-btn weui-btn_default" @click="showCont2">辅助操作</a>
                    <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont2">主操作</a>
                </div>
            </div>
        </div>
        <!--END dialog2-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'weui_Half_screen_Dialog',
  data () {
    return {
      show1:false,
      show2:false,
    }
  },
  methods: {
    showCont1:function(){
      this.show1 = !this.show1;
      this.isActive = true;
    },
    showCont2:function(){
      this.show2 = !this.show2;
      this.isActive = true;
    },
  },

}
</script>

<style scoped>
input{height:30px;margin:auto;}
p{font-size:0.3rem;padding:0.1rem;margin:auto;text-align:left;}
.weui-half-screen-dialog{transform:translateY(1000px);}
.weui-half-screen-dialog_show{animation:weui_half_screen_dialog_play 0.2s forwards;}
@keyframes weui_half_screen_dialog_play{
  100%{transform:translateY(0px);}
}
</style>
