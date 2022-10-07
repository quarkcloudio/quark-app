import { FunctionComponent, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Render from '../engine/render'
import './page.scss'

export interface PageProps {
  className: string
  loading: boolean
  style: any
  title: string
  content: any
}

const defaultProps = {
  className: '',
  loading: false,
  style: null,
  title: '',
  content: null
} as PageProps

export const Page: FunctionComponent<Partial<PageProps>> = (props) => {

  const {
    className,
    loading,
    style,
    title,
    content,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: title
    })
  }, [])

  return (
    <View style={{...style}} {...rest}>
      <Render body={content} />
    </View>
  )
}

Page.defaultProps = defaultProps
Page.displayName = 'QuaPage'
