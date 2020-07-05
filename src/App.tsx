import 'react-native-gesture-handler'

import { SafeAreaView, Text } from 'react-native'

import { Globals } from './config'
import React from 'react'
import { RootStack } from './config/router'
import { ThemeProvider } from 'react-native-elements'

export const App = () => {
  return (
    <ThemeProvider theme={Globals.Theme}>
      <SafeAreaView style={{
        flex: 1
      }}>
        <RootStack />
      </SafeAreaView>
    </ThemeProvider>
  )
}
