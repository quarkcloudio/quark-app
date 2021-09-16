export default {
  // APP默认初始化接口
  'GET /api/app/initData': {
      component: "page",
      title: 'QuarkApp',
      body: [
        {
          component: "cell",
          title: 'Page 页面',
          url:'/pages/index/index?api=api/page/index'
        },
        {
          component: "cell",
          title: 'Swiper 轮播',
          url:'/pages/index/index?api=api/swiper/index'
        },
        {
          component: "cell",
          title: 'Cell 单元格',
          url:'/pages/index/index?api=api/cell/index'
        }
      ]
  },
}