import { FunctionComponent } from 'react'
import { Navigator as TaroNavigator } from '@tarojs/components'
import { CommonEventFunction } from '@tarojs/components/types/common'
import './navigator.scss'

export interface NavigatorProps {
  target: any
  url: string
  openType: any
  delta: number
  appId: string
  path: string
  extraData: Object
  version: any
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

  return (
    <TaroNavigator
      className={`qua-navigator`}
      target={target}
      url={url}
      openType={openType}
      delta={delta}
      appId={appId}
      path={path}
      extraData={extraData}
      version={version}
      hoverClass={hoverClass}
      hoverStopPropagation={hoverStopPropagation}
      hoverStartTime={hoverStartTime}
      hoverStayTime={hoverStayTime}
      style={{...style}}
      onSuccess={onSuccess}
      onFail={onFail}
      onComplete={onComplete}
      {...rest}
    >
      {props.children}
    </TaroNavigator>
  )
}

Navigator.defaultProps = defaultProps
Navigator.displayName = 'QuaNavigator'
