import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro'
import Engine from '../../components/Engine';
import config from '../../../config.json'

const Index: React.FC<{}> = () => {

  const [initApi, setInitApi] = useState();
  const $instance = Taro.getCurrentInstance();
  const api:any = $instance.router.params.api ?? config.initApi;

  useEffect(() => {
    onSetInitApi()
  }, [api]);

  const onSetInitApi = async () => {
    setInitApi(api);
  };

  return (
    initApi ? <Engine initApi={initApi} /> : null
  );
}

export default Index;