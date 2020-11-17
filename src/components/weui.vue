<template>
  <div id="weui">
    <h1 class="tit">input</h1>
    <div class="weui">
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="showCont">按钮</a>
      <div class="main" v-if="show">
        <h1 class="tit">radio</h1>
        <div class="weui-cells weui-cells_radio">
          <label class="weui-cell weui-check__label" for="x11">
              <div class="weui-cell__bd">
                  <p>cell standard</p>
              </div>
              <div class="weui-cell__ft">
                  <input type="radio" class="weui-check" name="radio1" id="x11">
                  <span class="weui-icon-checked"></span>
              </div>
          </label>
          <label class="weui-cell weui-check__label" for="x12">

              <div class="weui-cell__bd">
                  <p>cell standard</p>
              </div>
              <div class="weui-cell__ft">
                  <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked">
                  <span class="weui-icon-checked"></span>
              </div>
          </label>
        </div>
        <h1 class="tit">checkbox</h1>
        <div class="weui-cells weui-cells_checkbox">
          <label class="weui-cell weui-check__label" for="s11">
              <div class="weui-cell__hd">
                  <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
                  <i class="weui-icon-checked"></i>
              </div>
              <div class="weui-cell__bd">
                  <p>standard is dealt for u.</p>
              </div>
          </label>
          <label class="weui-cell weui-check__label" for="s12">
              <div class="weui-cell__hd">
                  <input type="checkbox" name="checkbox1" class="weui-check" id="s12">
                  <i class="weui-icon-checked"></i>
              </div>
              <div class="weui-cell__bd">
                  <p>standard is dealicient for u.</p>
              </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weui',
  data () {
    return {
      show:true,
    }
  },
  methods: {  
    showCont:function(){
      this.show = !this.show;
    },
  },
}
</script>

<style scoped>
input{height:30px;margin:auto;}
p{font-size:0.3rem;padding:0.1rem;margin:auto;text-align:left;}
</style>
