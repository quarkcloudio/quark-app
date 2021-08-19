export default {
  // APP默认初始化接口
  'GET /api/app/initData': {
      component: "page",
      body: [
        {
          component: "navbar",
          title: 'i love',
          icon: 'share',
          desc: "清空",
          leftShow: true
        },
        {
          component: "swiper"
        }
      ]
  },

  'POST /api/upload': {
    file: 'xxxx'
  }
}