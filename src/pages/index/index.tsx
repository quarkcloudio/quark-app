import { Component } from 'react'
import { NativeBaseProvider, Center } from 'native-base';
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <NativeBaseProvider>
        <Center>
          hello world!
        </Center>
      </NativeBaseProvider>
    )
  }
}
