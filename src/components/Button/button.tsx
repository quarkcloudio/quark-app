import React, {
  useEffect,
} from 'react'

import { View } from '@tarojs/components'
import './button.scss'

export interface ButtonProps {
  className: string
  type: string
  size: string
  shape: string
  color: string
  plain: boolean
  loading: boolean
  disabled: boolean
  style: any
  block: boolean
  icon: string
  children: any
}

const defaultProps = {
  className: '',
  type: 'default',
  size: 'normal',
  shape: 'round',
  color: '',
  plain: false,
  loading: false,
  disabled: false,
  block: false,
  icon: '',
  style: {},
  children: undefined,
} as ButtonProps

export const Button: React.FC<Partial<ButtonProps>> = (props) => {

  useEffect(() => {

  }, [])

  return (
    <View
      className={`
        qua-button qua-button--${props.type}
        qua-button--${props.size}
        qua-button--${props.shape}
      `}
      style={props.style}
    >
      {props.children}
    </View>
  )
}

Button.defaultProps = defaultProps
Button.displayName = 'QuaButton'
