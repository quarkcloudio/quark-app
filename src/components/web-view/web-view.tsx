import React from 'react';
import classNames from 'classnames';
import { WebView as BaseWebView } from '@tarojs/components';
import { getWindowHeight } from '../../utils/windowHeight';
import './web-view.scss';

export const WebView: React.FC<any> = props => {

  const handleMessage = (e:any) => {
    console.log(e);
  }

  return (
    <BaseWebView
      src={props.src}
      style={
        props.style ? props.style: {
          width:'100%',
          height:getWindowHeight(false, false)
        }
      }
      className={classNames('web-view')}
      onMessage={handleMessage}
    />
  )
}
