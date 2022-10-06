import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { Page } from './page'

export default class Demo extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Page></Page>
      </View>
    )
  }
}
