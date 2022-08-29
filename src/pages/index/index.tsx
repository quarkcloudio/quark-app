import { Component } from 'react'
import { View } from '@tarojs/components'
import { NativeBaseProvider, Text, Center, Container, Heading, Button } from 'native-base';
import { NativeModules } from 'react-native';
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  deviceProduct = async () => {
    try {
      const { product } = await NativeModules.DeviceProduct.getDeviceProduct();
      NativeModules.Toast.show(product, NativeModules.Toast.SHORT);
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    return (
      <NativeBaseProvider>
        <Center>
          <Container>
            <Heading>
              A component library for the
              <Text color="emerald.500"> React Ecosystem</Text>
            </Heading>
            <Text mt="3" fontWeight="medium">
              NativeBase is a simple, modular and accessible component library that
              gives you building blocks to build you React applications.
            </Text>
            <Button onPress={() => {this.deviceProduct()}}>Test</Button>
          </Container>
        </Center>
      </NativeBaseProvider>
    )
  }
}
