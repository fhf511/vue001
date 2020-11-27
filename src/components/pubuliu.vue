<template>
  <div id="pubuliu">
    <h1 class="tit">瀑布流</h1>
    <div class="pubuliu">
      <vue-data-loading :loading="loading" :completed="completed" :listens="['infinite-scroll', 'pull-down']" :init-scroll="true" @infinite-scroll="infiniteScroll" @pull-down="pullDown">
            <div slot="pull-down-ready">下拉刷新</div>
            <ul class="news">
                <li v-for="(item, index) in list" :key="index"><a href="javascript:;">测试专用填充数据: {{item}}</a></li>
            </ul>
            <div slot="infinite-scroll-loading">加载中...</div>
            <div slot="completed">没有了!</div>
        </vue-data-loading>
    </div>
  </div>
</template>

<script>
    import VueDataLoading from 'vue-data-loading'
    export default {
        name: 'loadMore',
        data() {
            return {
                list: [],
                loading: false,
                completed: false,
                page: 1,
            }
        },
        components: {
            VueDataLoading
        },
        methods: {
            fetchData() {
                this.loading = true
                setTimeout(() => {
                    if (this.page > 3) {
                        this.completed = true
                        this.loading = false
                        return
                    }
                    const temp = []
                    for (let i = this.list.length + 1; i <= this.list.length + 50; i++) {
                        temp.push(i)
                    }
                    this.list = this.list.concat(temp)
                    this.loading = false
                }, 1000)
            },
            pullUp() {
                this.fetchData()
                this.page++
            },
            pullDown() {
                this.list = []
                this.page = 1
                this.completed = false
                this.fetchData()
            },
            infiniteScroll() {
                this.fetchData()
                this.page++
            },
        },
        created() {
//            this.fetchData()
        }
    }
</script>

<style >
.news li{display:block;padding:5px;border-bottom:solid 1px #eee;}
.news a{display:block;font-size:16px;}
.header-text,.footer-text{font-size:12px;}

</style>
