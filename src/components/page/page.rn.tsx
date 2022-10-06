import { FunctionComponent, useEffect } from 'react'
import { View } from '@tarojs/components'
import Render from '../engine/render'
import './page.scss'

export interface PageProps {
  className: string
  loading: boolean
  style: any
  content:any
}

const defaultProps = {
  className: '',
  loading: false,
  style: null,
  content: null,
} as PageProps

export const Page: FunctionComponent<Partial<PageProps>> = (props) => {

  useEffect(() => {
    console.log(props.style)
  }, [])

  return (
    <View style={{...props.style}}>
      <Render body={props.content} />
    </View>
  )
}

Page.defaultProps = defaultProps
Page.displayName = 'QuaPage'
