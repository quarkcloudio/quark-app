import React from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View, Text } from '@tarojs/components';
import './cell.scss';

export const Cell: React.FC<any> = (props:any) => {
  const navigateTo = (url:string, openType:string = 'navigate') => {
    if(!url) {
      return false;
    }
    
    switch (openType) {
      case 'switch':
        Taro.switchTab({
          url: url
        })
        break;

      case 'reLaunch':
        Taro.reLaunch({
          url: url
        })
        break;

      case 'navigate':
        Taro.navigateTo({
          url: url
        })
        break;
    
      case 'redirect':
        Taro.redirectTo({
          url: url
        })
        break;

      default:
        Taro.navigateTo({
          url: url
        })
        break;
    }
  };

  return (
    <View className="cell" onClick={() => navigateTo(props.url, props.openType)}>
      <Text className={classNames('cell-title')}>
        {props.title}
      </Text>
      <Text className={classNames('cell-value')}>
        {props.desc ?? null}
      </Text>
      <Text className={classNames('cell-icon')}>
        >
      </Text>
    </View>
  );
}