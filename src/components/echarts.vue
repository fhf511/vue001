<template>      
    <div id="echarts">
        <h1 class="tit">echarts图表</h1>
        <div id="echarts1" class="echarts"></div>
        <div class="echarts2tit">{{echarts2tit}}</div>
        <div id="echarts2" class="echarts"></div>
        <div id="echarts3" class="echarts"></div>
    </div>
</template>

<script>
export default {
    name: 'echarts',
    data () {
        return {
            msg: 'one test',
            echarts2tit:'未来一周气温变化'
        }
    },
    mounted(){
        this.test1();
        this.test2();
        this.test3();
    },
    methods: {
        test1(){
            let echarts1 = this.$echarts.init(document.getElementById('echarts1'))
            echarts1.setOption({
                title: { 
                    text: '图表1' ,
                    x:'center'
                },
                tooltip: {},
                xAxis: {
                    data: ["帽子","袜子","手表","轮胎","红枣","打包袋"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        test2(){
            let echarts2 = this.$echarts.init(document.getElementById('echarts2'))
            echarts2.setOption({
                title : {
                    text: '',
                    subtext: '纯属虚构',
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['最高气温','最低气温'],
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series : [
                    {
                        name:'最高气温',
                        type:'line',
                        data:[11, 11, 15, 13, 12, 13, 10],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'最低气温',
                        type:'line',
                        data:[1, -2, 2, 5, 3, 2, 0],
                        markPoint : {
                            data : [
                                {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            });
        },
        test3(){
            let echarts3 = this.$echarts.init(document.getElementById('echarts3'))
            echarts3.setOption({
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            });
        },
    }
}
</script>

<style scoped>
.echarts{width:90%;height:300px;margin:0 auto 50px;}
.echarts2tit{font-size:18px;font-weight:bold;margin:0 0 10px;}
</style>
