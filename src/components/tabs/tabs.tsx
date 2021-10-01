import React from 'react';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import './tabs.scss';

export const Tabs: React.FC<any> = props => {
  return (
    <View
      className={classNames({
        'tabs' : true,
      })}
    >
      <View
        className={classNames({
          'tabs-tab-list' : true,
        })}
      >
        <View
          className={classNames({
            'tabs-tab-wrapper' : true,
          })}
        >
          <View
            className={classNames({
              'tabs-tab' : true,
              'tabs-tab-active' : true,
            })}
          >
            test
          </View>
        </View>
        <View
          className={classNames({
            'tabs-tab-wrapper' : true,
          })}
        >
          <View
            className={classNames({
              'tabs-tab' : true
            })}
          >
            test1
          </View>
        </View>
      </View>
      <View
        className={classNames({
          'tabs-tab-content' : true,
        })}
      >
        {props.children}
      </View>
    </View>
  )
}
