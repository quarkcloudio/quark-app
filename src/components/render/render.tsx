import React from 'react';
import Page from '../page';
import Swiper from '../swiper';
import RichText from '../rich-text';
import Cell from '../cell';
import WebView from '../web-view';
import { Input, Text } from '@tarojs/components'
import { tplEngine } from '../../utils/template';

export const Render: React.FC<any> = (props:any) => {

  // 注册组件
  const registerComponent = (body:any, data:any, callback:any) => {

    return [
      {
        key: 'page',
        component: <Page {...body} />
      },
      {
        key: 'swiper',
        component: <Swiper {...body} />
      },
      {
        key: 'rich-text|richText',
        component: <RichText {...body} />
      },
      {
        key: 'input',
        component: <Input {...body} />
      },
      {
        key: 'cell',
        component: <Cell {...body} />
      },
      {
        key: 'web-view|webView',
        component: <WebView {...body} />
      }
    ];
  }

  // 渲染组件
  const componentRender = (body:any, data:any, callback:any) => {

    if(body === null || body === undefined) {
      return null;
    }

    if(typeof body === 'string' || typeof body === 'number') {
      if(props.hasOwnProperty('data')) {
        // 解析数据
        body = tplEngine(body, data);
      }

      return body;
    }

    let component:any = null;
    if(body.hasOwnProperty('component')) {
      registerComponent(body, data, callback).map((item:any) => {
        if(item.key.indexOf(body.component + '|') != -1) {
          component = item.component;
        } else {
          if(item.key === body.component) {
            component = item.component;
          }
        }
      });
    } else {
      component = (
        body.map((item:any) => {
          return registerComponent(item, data, callback).map((componentItem:any) => {
            if(componentItem.key.indexOf(item.component + '|') != -1) {
              return componentItem.component;
            } else {
              if(componentItem.key === item.component) {
                return componentItem.component;
              }
            }
          });
        })
      );
    }

    return component;
  }

  const component = componentRender(props.body, props.data, props.callback);

  return (typeof component === 'string') ? <Text>{component}</Text> : component
}