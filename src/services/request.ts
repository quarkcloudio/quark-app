import Taro from '@tarojs/taro'
import { stringify } from 'qs';

export async function get(params: any) {
  let actionUrl = '',url = '';
  url = params.actionUrl;
  delete params['actionUrl'];

  if(url.indexOf("?") != -1) {
    actionUrl = `${url}&${stringify(params)}`;
  } else {
    actionUrl = `${url}?${stringify(params)}`;
  }

  if(actionUrl.indexOf("http") == -1) {
    actionUrl = HOST+'/'+actionUrl;
  }

  console.log('request:' + actionUrl);

  return Taro.request({
    method: 'GET',
    url: actionUrl,
    fail: function (res) {
      alert(res);
    }
  });
}

export async function post(params: any) {
  let actionUrl = '',url = '';
  url = params.actionUrl;
  delete params['actionUrl'];

  if(url.indexOf("http") == -1) {
    actionUrl = HOST+'/'+url;
  } else {
    actionUrl = url;
  }

  console.log('request:' + actionUrl);

  return Taro.request({
    method: 'POST',
    url: actionUrl,
    data: params,
  });
}