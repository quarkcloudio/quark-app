import React from 'react';
import { ConfigProvider,Button, Row, Col, Input,Avatar  } from '@nutui/nutui-react';

const Login: React.FC<any> = (props:any) => {

  return (
    <ConfigProvider>
      <div className='container' style={{padding:"0px 20px"}}>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <div style={{textAlign:"center",marginTop:80,marginBottom:10}}>
              <Avatar size="100" icon="https://gw.alicdn.com/tfs/TB1puqzr6MZ7e4jSZFOXXX7epXa-160-160.png"/>
            </div>
          </Col>
        </Row>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <Input labelWidth={0} label={undefined}  placeholder="请输入手机号" />
          </Col>
        </Row>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <Input
                labelWidth={0}
                label={undefined}
                clearable
                center
                placeholder='请输入验证码'
                slotButton={<div style={{color:"#666666"}}>发送验证码</div>}
              />
          </Col>
        </Row>
        <Row type="flex" wrap="nowrap">
          <Col span="24">
            <div style={{textAlign:'center',marginTop:20}}>
              <Button block type="info" size='large'>登录</Button>
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Login;