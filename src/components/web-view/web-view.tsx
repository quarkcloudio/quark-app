import React from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { WebView as TaroWebView } from '@tarojs/components';
import { WebView as RNWebView} from 'react-native-webview';
import { getWindowHeight } from '../../utils/windowHeight';
import './web-view.scss';

export const WebView: React.FC<any> = props => {
  const style = props.style ? props.style : {
    width:'100%',
    height:getWindowHeight(false, false)
  }
  let webView:any = undefined;
  let script = 'alert(document.title)';

  const handleMessage = (e:any) => {
    console.log(e);
  }

  if (process.env.TARO_ENV === 'rn') {
    webView = (
      <RNWebView
        source={{uri: props.src}}
        style={style}
        className={classNames('web-view')}
        onMessage={handleMessage}
        injectedJavaScript={script}
      />
    );
  } else {
    webView = (
      <TaroWebView
        src={props.src}
        style={style}
        className={classNames('web-view')}
        onMessage={handleMessage}
      />
    )
  }

  return (webView);
}
