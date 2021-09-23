import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import './space.scss'

export type SpaceProps = {
  size?: number|string,
  wrap?: boolean
}

export const Space: React.FC<SpaceProps> = (props:any) => {

  let style = {}
  let sizeStyle = {}
  let propsSize = props.size ?? 16;

  if(propsSize) {
    let size = typeof propsSize === 'number' ? propsSize : propsSize.replace(/px/g,"")

    sizeStyle = {
      marginRight: parseInt(size),
      marginBottom: props.wrap ? parseInt(size) : 0,
    }

    if(props.wrap) {
      style = {
        marginBottom: -parseInt(size),
      }
    }
  }

  // 渲染组件
  const componentRender = () => {
    if(props.children === null || props.children === undefined) {
      return null;
    }

    if(typeof props.children === 'string' || typeof props.children === 'number') {
      return props.children;
    }

    if(!props.children.hasOwnProperty('length')) {
      return props.children;
    }

    return props.children.map((item:any,key:number) => {
      return (
        <View key={key} style={sizeStyle} className={classNames('space-item')}>
          {item}
        </View>
      );
    })
  }

  return (
    <View
      style={style}
      className={classNames({
        'space':true,
        'space-wrap':props.wrap ? true : false
      })}
    >
      {componentRender()}
    </View>
  );
}