import 'react-native-gesture-handler'

import { MainStack } from './config/router'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import globals from './config/globals'

export const App = () => {
  return (
    <ThemeProvider theme={globals.Theme}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <MainStack />
      </SafeAreaView>
    </ThemeProvider>
  )
}
