import React from 'react';
import { View } from '@tarojs/components';
import Button from '../../components/button';
import Block from '../../components/block';
import Space from '../../components/space';
import classNames from 'classnames';
import './index.scss';
// import { Button as BaseButton } from 'antd-mobile'

const Tester: React.FC<any> = (props:any) => {

  return (
    <Block title="不同颜色的按钮">
      <Space size="8" wrap>
        <Button>
          Primary
        </Button>
        <Button>
          Primary
        </Button>
        <Button>
          Primary
        </Button>
        <Button>
          Primary
        </Button>
        <Button>
          Primary
        </Button>
        {/* <BaseButton color="primary">Primary</BaseButton> */}
      </Space>
    </Block>
  );
}

export default Tester;