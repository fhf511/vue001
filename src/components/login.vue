<template>
  <div id="login">
    <h1 class="tit">login</h1>
    <div class="login">
      <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
            <div class="weui-cell__bd">
                <input id="js_input" class="weui-input" placeholder="填写用户名">
            </div>
          </div>
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
            <div class="weui-cell__bd mima">
                <input type="text" class="weui-input" v-model="msg" v-if="checked" placeholder="输入密码">
                <input type="password" class="weui-input" v-model="msg" v-else placeholder="输入密码">
                <span class="weui-input"></span>
                <i class="checkbtn" v-bind:class="{'off-pwd' : classA,'on-pwd':!classA}" @click="toggle">
                  <input type="checkbox" v-model="checked" class="checkbtn_input">
                </i>
            </div>
          </div>
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">联系电话</label></div>
            <div class="weui-cell__bd">
                <input id="js_input" class="weui-input" placeholder="填写绑定的电话号码" type="number" pattern="[0-9]*">
            </div>
          </div>
      </div>
      
      <a href="javascript:" class="weui-btn weui-btn_primary">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg:"",
      checked:false,
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
.weui-cells{margin-bottom:20px;}
label{text-align:right;padding:0 10px 0 0;}
.checkbtn {
    position: absolute;
    right: 1.3rem;
    top: 50%;
    width: 0.8rem;
    height: 0.8rem;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position:center center;
    margin-top:-0.4rem;
    z-index: 99;
}
.on-pwd{
  background-image: url(../assets/yin.png);
}
.off-pwd {
    background-image: url(../assets/xian.png);
}
.checkbtn_input{opacity:0;width:100%;height:100%;}
.mima{text-align:left;}
.mima .weui-input{width:50%;}
</style>
