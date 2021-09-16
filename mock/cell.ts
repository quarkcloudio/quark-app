export default {
  // Cell 单元格
  'GET /api/cell/index': {
      component: "page",
      title: 'Cell 单元格',
      body: [
        {
          component: "cell",
          title: '标题',
          desc: '描述信息',
          url:'/pages/index/index?api=api/swiper/index'
        },
        {
          component: "cell",
          title: '标题',
          desc: '描述信息',
          url:'/pages/index/index?api=api/cell/index'
        }
      ]
  },
}