<template>
  <div id="details1">
    <h1 class="tit">details</h1>
    <h1 class="tit">{{tit}}</h1>
    <div class="details">
      <p class="p" v-for="text in texts">{{ text.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details1',
  data () {
    return {
      tit:"纪元",
      texts:[
        {
          text:"纪元，历史上纪年的起算年代。中国纪元，始于西周共和元年（公元前 841年）。自汉武帝建元元年（公元前140 年）以后，历朝诸帝皆立年号纪元；亦有中途改元者。"
        },
        {
          text:"在欧洲，希腊人曾以公元前776年（第一次奥林匹亚竞技会）为纪元，罗马人以公元前754－前753年（始建罗马城）为纪元。阿拉伯人以公元622年（穆罕默德由麦加迁麦地那）为纪元。今世界上多数国家采用公元纪年。"
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.weui-btn{margin:30px auto;}
.details{padding:10px;}
.p{font-size:16px;color:#000;text-align:justify;margin-bottom:10px;text-indent:2em;}
</style>
