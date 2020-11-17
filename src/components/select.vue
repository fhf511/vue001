<template>
  <div id="select0">
    <h1 class="tit">select</h1>
    <ul>
      <li>
        <div class="select">
          <select v-model="selected1" name="fruit1">
            <option value="">选择一个</option>
            <option value="1">1111</option>
            <option value="2">2222</option>
          </select>
          <div class="select_text">
            {{selected1}}
          </div>
        </div>
      </li>
      <li>
        <div class="select">
          <select v-model="selected2" name="fruit2">
            <option value="">选择一个</option>
            <option value="3">3333</option>
            <option value="4">4444</option>
          </select>
          <div class="select_text">
            {{selected2}}
          </div>
        </div>
      </li>
      <li>
        <div class="select">
          <select v-model="selected3" name="fruit3">
            <option value="">选择一个</option>
            <option value="5">5555</option>
            <option value="6">6666</option>
          </select>
          <div class="select_text">
            {{selected3}}
          </div>
        </div>
      </li>
      <li>
        <div class="select">
          <select v-model="selected4" name="fruit4">
            <option value="">选择一个</option>
            <option value="7">7777</option>
            <option value="8">8888</option>
          </select>
          <div class="select_text">
            {{selected4}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'select0',
  data () {
    return {
      selected1: '',
      selected2: '',
      selected3: '',
      selected4: '',
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
select:focus{text-decoration:none;outline:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);-webkit-focus-ring-color: rgba(0, 0, 0, 0);}
select{width:90%;height:30px;margin:0 auto 10px;display:block;background:transparent;border:solid 2px #000;border-radius:6px;color:#000;}
.select_text{font-size:0.8rem;}
</style>
