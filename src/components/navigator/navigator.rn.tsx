import { FunctionComponent } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CommonEventFunction } from '@tarojs/components/types/common'
import './navigator.scss'

export interface NavigatorProps {
  target: string
  url: string
  openType: string
  delta: number
  appId: string
  path: string
  extraData: Object
  version: string
  hoverClass: string
  hoverStopPropagation: boolean
  hoverStartTime: number
  hoverStayTime: number
  style: any
  children: any
  onSuccess?: CommonEventFunction
  onFail?: CommonEventFunction
  onComplete?: CommonEventFunction
}

const defaultProps = {
  target: 'self',
  url: '',
  openType: 'navigate',
  delta:1,
  appId: '',
  path: '',
  extraData: {},
  version: '',
  hoverClass: 'navigator-hover',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 600,
  style: {},
  children: undefined,
} as NavigatorProps

export const Navigator: FunctionComponent<Partial<NavigatorProps>> = (props) => {

  const {
    target,
    url,
    openType,
    delta,
    appId,
    path,
    extraData,
    version,
    hoverClass,
    hoverStopPropagation,
    hoverStartTime,
    hoverStayTime,
    style,
    onSuccess,
    onFail,
    onComplete,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  // 组件点击事件
  const onClick = (e) => {
    switch (openType) {
      case "navigate":
        Taro.navigateTo({
          url: url
        })
        break;
    
      case "redirect":
        Taro.redirectTo({
          url: url
        })
        break;

      case "switchTab":
        Taro.switchTab({
          url: url
        })
        break;

      case "reLaunch":
        Taro.reLaunch({
          url: url
        })
        break;

      case "navigateBack":
        Taro.navigateBack({
          delta: delta
        })
        break;

      case "exit":

        // 小程序特有
        break;

      default:
        Taro.navigateTo({
          url: url
        })
        break;
    }
  };

  return (
    <View
      className={`qua-navigator`}
      style={{...style}}
      {...rest}
      onClick={(e) => onClick(e)}
    >
      {props.children}
    </View>
  )
}

Navigator.defaultProps = defaultProps
Navigator.displayName = 'QuaNavigator'
