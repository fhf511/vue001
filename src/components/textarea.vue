<template>
  <div id="textarea0">
    <h1 class="tit">textarea</h1>
    <div class="textarea">      
      <textarea v-model="message" placeholder="多行文本输入……"></textarea>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textarea0',
  data () {
    return {
      message: 'textarea',
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
textarea{text-decoration:none;border:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
textarea:focus{text-decoration:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
textarea{width:300px;height:100px;padding:10px;background:transparent;border-radius:10px;color:#000;border:solid 2px #000;}
p{width:300px;font-size:0.3rem;color:#000;padding:0.1rem;margin:auto;text-align:left;}
</style>
