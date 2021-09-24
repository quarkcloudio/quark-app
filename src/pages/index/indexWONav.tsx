import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import Engine from '../../components/engine';
import config from '../../../config.json';
import { View } from '@tarojs/components';

const Index: React.FC<{}> = () => {

  const [initApi, setInitApi] = useState();
  const $instance = Taro.getCurrentInstance();
  const api:any = $instance.router.params.api ?? config.initApi;

  useEffect(() => {
    onSetInitApi();
  }, [api]);

  const onSetInitApi = async () => {
    setInitApi(api);
  };

  return (
    <View className="default-theme">
      {initApi ? <Engine initApi={initApi} /> : <View>Error</View>}
    </View>
  );
}

export default Index;