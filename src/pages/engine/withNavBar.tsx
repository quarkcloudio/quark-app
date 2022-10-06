import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import Engine from '../../components/engine'
import './index.scss'

export default class withNavBar extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Engine api="/api/mix/page/index" />
      </View>
    )
  }
}
