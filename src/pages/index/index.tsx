import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { NativeBaseProvider, Text, Box } from 'native-base';

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <View>Hello World!</View>
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      </NativeBaseProvider>
    )
  }
}
