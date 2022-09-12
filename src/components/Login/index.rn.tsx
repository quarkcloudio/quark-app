import React from 'react';
import { NativeBaseProvider, Button, Center, Input, VStack, Box,Image } from "native-base";

const Login: React.FC<any> = (props:any) => {

  return (
    <NativeBaseProvider>
      <Box safeArea paddingLeft={5} paddingRight={5}>
        <VStack space={4} alignItems="center">
          <Box>
            <Image size={100} alt="fallback text" borderRadius={100} source={{
              uri: "https://-page-icon.png"
            }} fallbackSource={{
              uri: "https://www.w3schools.com/css/img_lights.jpg"
            }} />
          </Box>
          <Box>
            <Input variant="underlined" placeholder="请输入手机号" w="100%" />
          </Box>
          <Box>
            <Input variant="underlined" placeholder="请输入验证码" w="100%" />
          </Box>
          <Box width="100%">
            <Button size={"lg"} borderRadius="full" backgroundColor="#056de8">登录</Button>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;