import React from 'react';
import { RichText as TaroRichText } from '@tarojs/components'

export const RichText: React.FC<any> = (props:any) => {
  return (
    <TaroRichText nodes={props.nodes} />
  );
}