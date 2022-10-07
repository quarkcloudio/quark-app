import { Component, PropsWithChildren } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native'

import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    SplashScreen && SplashScreen.hide();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
        {this.props.children}
      </SafeAreaView>
    )
  }
}
export default App
