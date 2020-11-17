<template>
  <div id="input0">
    <h1 class="tit">input</h1>
    <div class="input">
      <input v-model="message" placeholder="编辑我……">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input0',
  data () {
    return {
      message: 'input',
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
a,input{text-decoration:none;border:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
a:focus,input:focus{text-decoration:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
input{width:300px;height:30px;padding:0 10px;margin:auto;background:transparent;border-radius:20px;color:#000;border:solid 2px #000;}
p{width:300px;font-size:0.3rem;color:#000;padding:0.1rem;margin:auto;text-align:left;}
</style>
