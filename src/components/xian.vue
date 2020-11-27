<template>
  <div id="xian">
    <h1 class="tit">画线</h1>
    <div class="text">
      <p class="p">{{ text1 }}</p>
      <p class="p">{{ text2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xian',
  data () {
    return {
      text1: '11111111',
      text2: '222222222',
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.p{width:300px;font-size:0.6rem;color:#000;padding:0.1rem;margin:auto;text-align:center;}
</style>
