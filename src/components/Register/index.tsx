import React from 'react';
import { ConfigProvider,Button, Row, Col, Input,Avatar  } from '@nutui/nutui-react';

const Login: React.FC<any> = (props:any) => {

  return (
    <ConfigProvider>
      <div className='container' style={{padding:"0px 30px"}}>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <div style={{marginTop:60,fontSize:33}}>
              手机号注册
            </div>
            <div style={{marginBottom:30,fontSize:16,color:'#999'}}>
              亲，欢迎注册本站账号
            </div>
          </Col>
        </Row>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <Input style={{padding:"10px 0px"}} labelWidth={0} label={undefined}  placeholder="请输入手机号" />
          </Col>
        </Row>
        <Row type="flex" wrap="nowrap" justify="space-around">
          <Col span="24">
            <Input
              style={{padding:"10px 0px"}}
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
            <div style={{textAlign:'center',marginTop:50}}>
              <Button block type="info" size='large'>注册</Button>
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Login;