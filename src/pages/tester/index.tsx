import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import Button from '../../components/button';
import Block from '../../components/block';
import Space from '../../components/space';
import './index.scss';

const Tester: React.FC<any> = (props:any) => {

  return (
    <View>
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
        </Space>
      </Block>
    </View>
  );
}

export default Tester;