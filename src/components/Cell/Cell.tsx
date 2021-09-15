import React from 'react';
import { View, Text } from '@tarojs/components';
import './Cell.scss';

const Cell: React.FC<any> = (props:any) => {

  return (
    <View className="cell">
      <Text className="cell-title">
        {props.title}
      </Text>
      <Text className="cell-value">
        {props.desc ?? null}
      </Text>
    </View>
  );
}

export default Cell;