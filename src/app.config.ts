export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/engine/index',
    'pages/engine/withNavBar',
    'pages/engine/withoutNavBar'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
	tabBar: {
		color: "rgb(145,145,145)",
		selectedColor: "rgb(46,143,254)",
		borderStyle: "black",
		backgroundColor: "#ffffff",
		list: [{
			"pagePath": "pages/index/index",
			"text": "首页"
		}, {
			"pagePath": "pages/my/index",
			"text": "我的"
		}]
	}
})
