import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { Button } from '../../components/Button'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button type="default">主要按钮</Button>
      </View>
    )
  }
}
