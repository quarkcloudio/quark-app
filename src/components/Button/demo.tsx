import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { Button } from '.'

export default class Demo extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Button type="default">默认按钮</Button>
        <Button type="primary">主要按钮</Button>
      </View>
    )
  }
}
