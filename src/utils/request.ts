import Taro from '@tarojs/taro'
import devConfig from "../../config/dev"
import prodConfig from "../../config/prod"

/**
 * 发起网络请求
 * @description 发起网络请求
 * @param {String} url 请求连接
 * @param {Object} options 请求属性
 */
export const request = async (url, options) => {
	if(url.indexOf("http") == -1) {
		let baseUrl = ''
		if (process.env.NODE_ENV == 'development') {
			baseUrl = devConfig.apiHost
		} else {
			baseUrl = prodConfig.apiHost
		}

		url = baseUrl+url;
	}

	let token:any = ''
	try {
		let getToken = await Taro.getStorage({
			key: 'token'
		})
		token = getToken.data
	} catch (e) {
		console.log(e)
	}

	var res = await Taro.request({
		url: url,
		data: options.data,
		method: options.method,
		header: {
			Authorization: `Bearer ${token}`
		}
	});
	
	return res.data;
}