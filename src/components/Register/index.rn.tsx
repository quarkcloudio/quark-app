import React from 'react';
import { NativeBaseProvider, Button, Input, VStack, Box, Text, extendTheme } from "native-base";

const Register: React.FC<any> = (props:any) => {

  const theme = extendTheme({});

  return (
    <NativeBaseProvider theme={theme}>
      <Box safeArea paddingLeft={8} paddingRight={8}>
        <VStack space={6} alignItems="center">
          <Box paddingTop={20} paddingBottom={10} w="100%">
            <Text paddingBottom={1} color="coolGray.600" fontSize={"4xl"}>
              手机号注册
            </Text>
            <Text color="coolGray.400" fontSize={"lg"} fontWeight="400">
              亲，欢迎注册本站账号
            </Text>
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
            <Button size={"lg"} borderRadius="full" backgroundColor="#056de8">注册</Button>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Register;