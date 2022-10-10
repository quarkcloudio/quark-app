export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/engine/index',
    'pages/engine/withNavBar',
    'pages/engine/withoutNavBar',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
	tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
		list: [{
			"pagePath": "pages/index/index",
			"text": "首页",
      "iconPath":"assets/icons/system.png",
      "selectedIconPath":"assets/icons/system_selected.png"
		}, {
			"pagePath": "pages/my/index",
			"text": "我的",
      "iconPath":"assets/icons/user.png",
      "selectedIconPath":"assets/icons/user_selected.png"
		}]
	}
})
