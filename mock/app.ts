export default {
  // APP默认初始化接口
  'GET /api/app/initData': {
      component: "page",
      title: 'QuarkApp',
      body: [
        {
          key:'cell1',
          component: "cell",
          title: 'Tester 页面',
          url:'/pages/tester/index'
        },
        {
          key:'cell2',
          component: "cell",
          title: 'Page 页面',
          url:'/pages/index/index?api=api/page/index'
        },
        {
          key:'cell3',
          component: "cell",
          title: 'Swiper 轮播',
          url:'/pages/index/index?api=api/swiper/index'
        },
        {
          key:'cell4',
          component: "cell",
          title: 'Cell 单元格',
          url:'/pages/index/index?api=api/cell/index'
        },
        {
          key:'cell5',
          component: "cell",
          title: 'WebView 页面',
          url:'/pages/index/indexWONav?api=api/web-view/index'
        },
        {
          key:'cell6',
          component: "cell",
          title: 'Tabs 标签页',
          url:'/pages/index/index?api=api/tabs/index'
        },
      ]
  },
}