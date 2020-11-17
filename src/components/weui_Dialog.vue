<template>
  <div id="weui_Dialog">
    <h1 class="tit">weui_Dialog</h1>
    <div class="weui">
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont1">按钮1</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont2">按钮2</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont3">按钮3</a>
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont4">按钮4</a>
      <div class="js_dialog" id="iosDialog1" v-if="show1">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
            <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
            <div class="weui-dialog__ft">
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_default" @click="showCont1">辅助操作</a>
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" @click="showCont1">主操作</a>
            </div>
        </div>
      </div>
      <div class="js_dialog" id="iosDialog2" v-else-if="show2">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
            <div class="weui-dialog__ft">
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" @click="showCont2">知道了</a>
            </div>
        </div>
      </div>
      <div class="js_dialog" id="androidDialog1" v-else-if="show3">
        <div class="weui-mask"></div>
        <div class="weui-dialog weui-skin_android">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
            <div class="weui-dialog__bd">
                弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_default" @click="showCont3">辅助操作</a>
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" @click="showCont3">主操作</a>
            </div>
        </div>
      </div>
      <div class="js_dialog" id="androidDialog2" v-else-if="show4">
        <div class="weui-mask"></div>
        <div class="weui-dialog weui-skin_android">
            <div class="weui-dialog__bd">
                弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_default" @click="showCont4">辅助操作</a>
                <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" @click="showCont4">主操作</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weui_Dialog',
  data () {
    return {
      show1:false,
      show2:false,
      show3:false,
      show4:false,
    }
  },
  methods: {  
    showCont1:function(){
      this.show1 = !this.show1;      
    },
    showCont2:function(){
      this.show2 = !this.show2;
    },
    showCont3:function(){
      this.show3 = !this.show3;
    },
    showCont4:function(){
      this.show4 = !this.show4;
    },
  },

}
</script>

<style scoped>
input{height:30px;margin:auto;}
p{font-size:0.3rem;padding:0.1rem;margin:auto;text-align:left;}
</style>
