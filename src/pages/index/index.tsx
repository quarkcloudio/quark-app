import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { NativeBaseProvider, Text, Center, Container, Heading } from 'native-base';

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
          </Container>
        </Center>
      </NativeBaseProvider>
    )
  }
}
