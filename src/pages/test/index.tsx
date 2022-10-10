import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import Button from '../../components/button'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' style={{flexDirection: 'row'}}>
        <Button type="default">默认按钮</Button>
        <Button size="large" type="primary" shape='square'>主要按钮</Button>
      </View>
    )
  }
}
