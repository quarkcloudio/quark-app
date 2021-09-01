import React from 'react';
import { RichText as TaroRichText } from '@tarojs/components'

const RichText: React.FC<any> = (props:any) => {
  return (
    <TaroRichText nodes={props.nodes} />
  );
}

export default RichText;