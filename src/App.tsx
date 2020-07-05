import 'react-native-gesture-handler'

import { SafeAreaView, Text } from 'react-native'

import { MainStack } from './config/router'
import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import globals from './config/globals'

export const App = () => {
  return (
    <ThemeProvider theme={globals.Theme}>
      <SafeAreaView style={{
        flex: 1
      }}>
        <MainStack />
      </SafeAreaView>
    </ThemeProvider>
  )
}
