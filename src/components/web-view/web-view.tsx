import React from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { WebView as TaroWebView } from '@tarojs/components';
import { getWindowHeight } from '../../utils/windowHeight';
import './web-view.scss';

export const WebView: React.FC<any> = props => {
  const style = props.style ? props.style : {
    width:'100%',
    height:getWindowHeight(false, false)
  }

  const handleMessage = (e:any) => {
    console.log(e);
  }

  return (
    <TaroWebView
      src={props.src}
      style={style}
      className={classNames('web-view')}
      onMessage={handleMessage}
    />
  );
}
