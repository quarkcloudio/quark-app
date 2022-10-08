import React from 'react';
import { View, Text } from '@tarojs/components'
import Page from '../page'
import Navigator from '../navigator'

export interface RenderProps {
  body: any,
  data: any,
  callback: any
}

const Render: React.FC<Partial<RenderProps>> = (props) => {
  
  // 注册组件
  const parseComponent = (body: any, data: any, callback: any) => {
    
    return [
      {
        key: 'view',
        component: <View style={{ ...body.style }}>{componentRender(body.body, body.data, body.callback)}</View>,
      },
      {
        key: 'text',
        component: <Text {...body}>{body.body}</Text>,
      },
      {
        key: 'page',
        component: <Page {...body} />,
      },
      {
        key: 'navigator',
        component: <Navigator {...body}>{componentRender(body.body, body.data, body.callback)}</Navigator>,
      },
    ];
  };

  // 渲染组件
  const componentRender = (body: any, data: any, callback: any) => {
    if (body === null || body === undefined) {
      return null;
    }

    if (typeof body === 'string' || typeof body === 'number') {
      return <Text>{body}</Text>;
    }

    let component: any = null;
    let parseComponents = parseComponent(body, data, callback);

    if (body.hasOwnProperty('component')) {
      parseComponents.map((item: any) => {
        if (item.key === body.component) {
          component = item.component;
        }
      });
    } else {
      component = body.map((item: any) => {
        return parseComponents.map(
          (componentItem: any) => {
            if (componentItem.key === item.component) {
              return componentItem.component;
            }
          },
        );
      });
    }

    return component;
  };

  return componentRender(props.body, props.data, props.callback);
}

export default Render;