import Auth from '../views/auth/auth'
import Home from '../views/app/Home'
import { NavigationContainer } from '@react-navigation/native'
import Product from '../views/app/Product'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home} />
        <Stack.Screen
          name='Product'
          options={{ headerShown: false }}
          component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}