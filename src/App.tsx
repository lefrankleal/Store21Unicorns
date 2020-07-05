import 'react-native-gesture-handler'

import { Globals, RootStack } from './config'
import { SafeAreaView, Text } from 'react-native'

import React from 'react'
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
