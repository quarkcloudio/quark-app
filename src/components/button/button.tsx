import React from 'react';
import { Button as BaseButton, Text } from '@tarojs/components';
import classNames from 'classnames';
import './button.scss';

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <BaseButton
      className={classNames({
        'button' : true,
        [`${props.size ?? 'middle'}-button`] : true,
        [`${props.color ?? 'default'}-button`] : true,
        'block' : props.block
      })}
      disabled={props.disabled}
      formType={props.type}
    >
      <Text className={classNames(
        props.size ? `${props.size}-text` : 'middle-text',
        {
          'white' : props.color ? props.color !== 'default' : false
        }
      )}>
        {props.children}
      </Text>
    </BaseButton>
  )
}
