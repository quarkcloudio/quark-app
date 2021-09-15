export default {
  // APP默认初始化接口
  'GET /api/app/initData': {
      component: "page",
      body: [
        {
          component: "cell",
          title: '标题',
          desc: '描述信息'
        },
        {
          component: "cell",
          title: '标题',
          desc: '描述信息'
        }
      ]
  },
}