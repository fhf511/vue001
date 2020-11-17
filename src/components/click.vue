<template>
  <div id="click">
    <h1 class="tit">@click</h1>
    <div class="click">
      <a href="javascript:" class="weui-btn weui-btn_primary" @click="btn">btn</a>
      <p class="p">{{ message }}</p>
      <p class="p">{{ message2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'click',
  data () {
    return {
      message: '11111111',
      message2: '222222222',
    }
  },
  methods: {
    btn: function () {  
      let text1=this;
      let text2=this;
      text1.message = '1a1a1a1a11a';
      text2.message2 = '2b2b2b2bb2b2';
    },
  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.p{width:300px;font-size:0.6rem;color:#000;padding:0.1rem;margin:auto;text-align:center;}
</style>
