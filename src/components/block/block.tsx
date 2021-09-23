import React from 'react';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import './block.scss'

export const Block: React.FC<any> = (props:any) => {

  return (
    <View className={classNames('block')}>
      <Text className={classNames('block-title')}>
        {props.title}
      </Text>
      <View className={classNames('block-content')}>
        {props.children}
      </View>
    </View>
  );
}