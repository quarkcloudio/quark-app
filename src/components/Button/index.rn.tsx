import React, {
  FunctionComponent,
  useEffect,
} from 'react'

import {
  TouchableOpacity
} from 'react-native';

import { View } from '@tarojs/components'
import './button.scss'

export interface ButtonProps {
  className: string
  color: string
  plain: boolean
  loading: boolean
  disabled: boolean
  style: React.CSSProperties
  block: boolean
  icon: string
  children: any
}

const defaultProps = {
  className: '',
  color: '',
  plain: false,
  loading: false,
  disabled: false,
  block: false,
  icon: '',
  style: {},
  children: undefined,
} as ButtonProps

export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {

  useEffect(() => {

  }, [])

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="qua-button qua-button--primary">
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = defaultProps
Button.displayName = 'QuaButton'
