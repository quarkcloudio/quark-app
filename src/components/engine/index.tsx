import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro'
import Render from '../engine/render'
import { get } from "../../services/action"

export interface EngineProps {
  api: string
}

const Engine: React.FC<Partial<EngineProps>> = (props) => {
  const [body, setBody] = useState(null);
  const instance = Taro.getCurrentInstance()

  useEffect(() => {
    let getApi = instance.router?.params?.api
    if (!getApi) {
      getApi = props.api
    }

    getComponents(getApi)
  }, [props.api]);

  // 获取组件
  const getComponents = async (api: any) => {
    if (!api) {
      Taro.showToast({
        title: '接口不能为空',
        icon: 'error',
        duration: 2000
      })
    } else {
      let res = await get({
        url:api,
      })

      setBody(res)
    }
  };

  return (
    <Render body={body} />
  );
}

export default Engine;