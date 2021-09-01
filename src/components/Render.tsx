import React from 'react';
import Page from '../components/Layout/Page';
import Swiper from '../components/Swiper/Swiper';
import RichText from '../components/RichText/RichText';
import { tplEngine } from '../utils/template';

const Render: React.FC<any> = (props:any) => {

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
        key: 'richText',
        component: <RichText {...body} />
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

  return (typeof component === 'string') ? <view dangerouslySetInnerHTML={{__html: component}} /> : component
}

export default Render;