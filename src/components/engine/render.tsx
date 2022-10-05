import React from 'react';
import { View } from '@tarojs/components'

export interface RenderProps {
  body: any,
  data: any,
  callback: any
}

const Render: React.FC<Partial<RenderProps>> = (props) => {
  console.log(props.body)

    // 注册组件
  const parseComponent = (body: any, data: any, callback: any) => {
    return [
      {
        key: 'page',
        component: <View>Test</View>,
      },
    ];
  };

  // 渲染组件
  const componentRender = (body: any, data: any, callback: any) => {
    if (body === null || body === undefined) {
      return null;
    }

    if (typeof body === 'string' || typeof body === 'number') {
      return body;
    }

    let component: any = null;
    let parseComponents = parseComponent(body, data, callback);

    if (body.hasOwnProperty('component')) {
      parseComponents.map((item: any) => {
        if (item.key.indexOf(body.component + '|') != -1) {
          component = item.component;
        } else {
          if (item.key === body.component) {
            component = item.component;
          }
        }
      });
    } else {
      component = body.map((item: any) => {
        return parseComponents.map(
          (componentItem: any) => {
            if (componentItem.key.indexOf(item.component + '|') != -1) {
              return componentItem.component;
            } else {
              if (componentItem.key === item.component) {
                return componentItem.component;
              }
            }
          },
        );
      });
    }

    return component;
  };

  return componentRender(props.body, props.data, props.callback);
};

export default Render;
