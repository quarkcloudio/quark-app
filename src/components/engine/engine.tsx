import React, { useState, useEffect } from 'react';
import { get } from '../../services/request';
import Render from '../render';

export const Engine: React.FC<any> = (props:any) => {

  const [components, setComponentsState] = useState('');
  const api = props.initApi;

  useEffect(() => {
    onSetComponentsState()
  }, [api]);

  const onSetComponentsState = async () => {
    if(api) {
      const result = await get({
        actionUrl: api
      });

      if(result) {
        setComponentsState(result.data);
      }
    } else {
      setComponentsState('请配置初始接口！');
    }
  };

  return (
    <Render body={components} />
  );
}