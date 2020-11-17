<template>
  <div id="radio">
    <h1 class="tit">radio</h1>
    <div class="radio">
      <ul>
        <li>
          <input type="radio" id="runoob" value="男" v-model="picked">
          <label for="runoob">男</label>
        </li>
        <li>
          <input type="radio" id="google" value="女" v-model="picked">
          <label for="google">女</label>
        </li>
      </ul>
      <p> 你选择的是<span>{{ picked }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      picked : '男'
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.radio ul{display:flex;margin:0 auto 0.2rem;}
.radio li{margin:0 0.5rem 0 0;line-height:1;}
.radio input{width:0.4rem;height:0.4rem;margin:0 0.1rem 0 0;padding:0;float:left;}
.radio label{font-size:0.4rem;margin:0;padding:0;float:left;}
p{font-size:0.4rem;padding:0.1rem;margin:auto;text-align:left;line-height:1;}
p span{padding:0 0.1rem;color:#f00;}
</style>
