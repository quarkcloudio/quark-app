import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import Button from '../../components/button';
import Block from '../../components/block';
import Space from '../../components/space';
import './index.scss';
// import {Button as AntdButton} from 'antd-mobile';

const Tester: React.FC<any> = (props:any) => {

  const onSetInitApi = async () => {
    setInitApi(api);
  };

  return (
    <View>
      <Block title="不同颜色的按钮">
        <Space size="8" wrap>
          <Button>
            Default
          </Button>
          <Button color="primary">
            Primary
          </Button>
          <Button color="success">
            Success
          </Button>
          <Button color="danger">
            Danger
          </Button>
          <Button color="warning">
            Warning
          </Button>
        </Space>
      </Block>
      <Block style="display:none" title='块级按钮'>
        <Button block color="primary" size='large'>
          Block Button
        </Button>
      </Block>
    </View>
  );
}

export default Tester;