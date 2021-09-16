export default {
  // swiper
  'GET /api/swiper/index': {
    component: "page",
    title: 'Swiper 轮播',
    body: {
      component: "swiper",
      indicatorColor: '#999',
      indicatorActiveColor: '#333',
      vertical: false,
      circular: true,
      indicatorDots: true,
      autoplay: true,
      list: [
        {
          title:'test',
          src:'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
          url:'#'
        },
        {
          title:'test1',
          src:'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
          url:'#'
        }
      ]
    }
  }
}