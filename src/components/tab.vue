<template>
  <div id="tab">
    <h1 class="tit">tab切换</h1>
    <div class="tabmenu">
      <ul class="menu">
        <li @click="cur=0" :class="{active:cur==0}"><a href="javascript:;">法师</a></li>
        <li @click="cur=1" :class="{active:cur==1}"><a href="javascript:;">战士</a></li>
        <li @click="cur=2" :class="{active:cur==2}"><a href="javascript:;">刺客</a></li>
        <li @click="cur=3" :class="{active:cur==3}"><a href="javascript:;">坦克</a></li>
        <li @click="cur=4" :class="{active:cur==4}"><a href="javascript:;">辅助</a></li>
        <li @click="cur=5" :class="{active:cur==5}"><a href="javascript:;">射手</a></li>
      </ul>
    </div>
    <div class="tabmain">
      <div class="list" id="list1" v-show="cur==0" >
        法师法师法师
      </div>
      <div class="list" id="list2" v-show="cur==1">
        战士战士战士
      </div>
      <div class="list" id="list3" v-show="cur==2">
        刺客刺客刺客
      </div>
      <div class="list" id="list4" v-show="cur==3">
        坦克坦克坦克
      </div>
      <div class="list" id="list5" v-show="cur==4">
        辅助辅助辅助
      </div>
      <div class="list" id="list6" v-show="cur==5">
        射手射手射手
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      show:false,
      cur:0,
    }
  },
  methods: {  
    
  },  
}
</script>

<style scoped>

</style>
