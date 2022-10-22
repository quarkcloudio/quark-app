import React, {
  useEffect,
} from 'react'

import { Button as TaroButton } from '@tarojs/components'
import './button.scss'

export const Button: React.FC<Partial<any>> = (props) => {
  useEffect(() => {

  }, [])

  return (
    <TaroButton
      {...props}
    >
      {props.children}
    </TaroButton>
  )
}
