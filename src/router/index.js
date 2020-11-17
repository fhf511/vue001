import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import imglist from '@/components/imglist'
import banner from '@/components/banner'
import banner1 from '@/components/banner1'

import viewer from '@/components/viewer'
import tab from '@/components/tab'
import echarts from '@/components/echarts'
import select from '@/components/select'
import input from '@/components/input'
import textarea from '@/components/textarea'
import radio from '@/components/radio'
import checkbox from '@/components/checkbox'
import weui from '@/components/weui'
import weui_Dialog from '@/components/weui_Dialog'
import weui_Half_screen_Dialog from '@/components/weui_Half_screen_Dialog'
import setTimeout from '@/components/setTimeout'
import click from '@/components/click'
import time_daojishi from '@/components/time_daojishi'
import addClass from '@/components/addClass'
import transition from '@/components/transition'
import login from '@/components/login'
import img from '@/components/img'
import classtoggle from '@/components/classtoggle'
import text from '@/components/text'
import textlist from '@/components/textlist'
import newslist from '@/components/newslist'
import newslist2 from '@/components/newslist2'
import details from '@/components/details'
import details2 from '@/components/details2'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/imglist',
      name: 'imglist',
      component: imglist
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/banner1',
      name: 'banner1',
      component: banner1
    },

    {
      path: '/viewer',
      name: 'viewer',
      component: viewer
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: textarea
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/weui',
      name: 'weui',
      component: weui
    },
    {
      path: '/weui_Dialog',
      name: 'weui_Dialog',
      component: weui_Dialog
    },
    {
      path: '/weui_Half_screen_Dialog',
      name: 'weui_Half_screen_Dialog',
      component: weui_Half_screen_Dialog
    },
    {
      path: '/setTimeout',
      name: 'setTimeout',
      component: setTimeout
    },
    {
      path: '/click',
      name: 'click',
      component: click
    },
    {
      path: '/time_daojishi',
      name: 'time_daojishi',
      component: time_daojishi
    },
    {
      path: '/addClass',
      name: 'addClass',
      component: addClass
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/img',
      name: 'img',
      component: img
    },
    {
      path: '/classtoggle',
      name: 'classtoggle',
      component: classtoggle
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/textlist',
      name: 'textlist',
      component: textlist
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: newslist
    },
    {
      path: '/newslist2',
      name: 'newslist2',
      component: newslist2
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/details2',
      name: 'details2',
      component: details2
    },
  ]
})
