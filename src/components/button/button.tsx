import React from 'react';
import { Button as BaseButton, Text } from '@tarojs/components';
import classNames from 'classnames';
import './button.scss';

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'submit' | 'reset' | 'button'
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <BaseButton
      className={classNames('button')}
    >
      <Text className={classNames('button-text')}>{props.children}</Text>
    </BaseButton>
  )
}
