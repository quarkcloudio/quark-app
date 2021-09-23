import React from 'react';
import { View } from '@tarojs/components';
import Button from '../button';
import Block from '../block';
import Space from '../space';
import classNames from 'classnames';
import './tester.scss'

export const Tester: React.FC<any> = (props:any) => {

  return (
    <Block title="不同颜色的按钮">
      <Space size="16" wrap>
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
      </Space>
    </Block>
  );
}