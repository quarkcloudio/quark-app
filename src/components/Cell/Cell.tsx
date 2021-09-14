import React from 'react';
import { View, Text } from '@tarojs/components';
import './Cell.scss';

const Cell: React.FC<any> = (props:any) => {

  return (
    <View className="cell">
      <View className="cell-title">
        {props.title}
      </View>
      <View className="cell-value">
        {props.desc ?? null}
      </View>
    </View>
  );
}

export default Cell;