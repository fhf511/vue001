<template>
  <div id="checkbox">
    <h1 class="tit">checkbox</h1>
    <div class="checkbox">
      <h1 class="tit">单个复选框：</h1>
      <ul>
        <li>         
            <input type="checkbox" id="checkbox1" v-model="checked">
            <label for="checkbox1">{{ checked }}</label>
        </li>
      </ul>
      <h1 class="tit">多个复选框：</h1>
      <ul>
        <li>         
          <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
          <label for="runoob">Runoob</label>
        </li>
        <li>         
          <input type="checkbox" id="google" value="Google" v-model="checkedNames">
          <label for="google">Google</label>
        </li>
        <li>
          <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
          <label for="taobao">taobao</label>
        </li>
      </ul>
      <p> 你选择的是<span>{{ checkedNames }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      checked : false,
      checkedNames: []
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.checkbox ul{display:flex;margin:0 auto 0.2rem;}
.checkbox li{margin:0 0.5rem 0 0;line-height:1;}
.checkbox input{width:0.4rem;height:0.4rem;margin:0 0.1rem 0 0;padding:0;float:left;}
.checkbox label{font-size:0.4rem;margin:0;padding:0;float:left;}
p{font-size:0.4rem;padding:0.1rem;margin:auto;text-align:left;line-height:1;}
p span{padding:0 0.1rem;color:#f00;}
</style>
