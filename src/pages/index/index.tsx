import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import Page from '../../components/engine/page'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Page api="/api/mix/page/index" />
      </View>
    )
  }
}
