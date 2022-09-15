import { Component } from 'react'
import { View } from '@tarojs/components'
import Login from '../../../src/components/Login';
import Register from '../../../src/components/Register';
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Register />
      </View>
    )
  }
}
