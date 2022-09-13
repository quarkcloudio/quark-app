import React from 'react';
import { NativeBaseProvider, Button, Input, VStack, Box, Image, extendTheme } from "native-base";

const Login: React.FC<any> = (props:any) => {

  const theme = extendTheme({});

  return (
    <NativeBaseProvider theme={theme}>
      <Box safeArea paddingLeft={8} paddingRight={8}>
        <VStack space={6} alignItems="center">
          <Box paddingTop={20} paddingBottom={10}>
            <Image
              size={100}
              alt="fallback text"
              borderRadius={100}
              source={{
                uri: "https://gw.alicdn.com/tfs/TB1puqzr6MZ7e4jSZFOXXX7epXa-160-160.png"
              }}
              fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
              }}
            />
          </Box>
          <Box>
            <Input
              variant="underlined"
              placeholder="请输入手机号"
              w="100%"
              _focus={{
                borderColor: "gray.300",
              }}
              style={{ fontSize: 18 }}
            />
          </Box>
          <Box>
            <Input
              variant="underlined"
              placeholder="请输入验证码"
              w="100%"
              _focus={{
                borderColor: "gray.300",
              }}
              style={{ fontSize: 18 }}
              InputRightElement={<Button variant={"link"} size="lg" _text={{color:"gray.400"}} w="1/3" h="full">发送验证码</Button>}
            />
          </Box>
          <Box width="100%" paddingTop={10}>
            <Button size={"lg"} borderRadius="full" backgroundColor="#056de8">登录</Button>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Login;