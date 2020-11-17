<template>
  <div id="text0">
    <h1 class="tit">text</h1>
    <div class="text">
      <p class="p">{{ text1 }}</p>
      <p class="p">{{ text2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'text0',
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
