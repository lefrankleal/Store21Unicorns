import Auth from '../views/auth/auth'
import Cart from '../views/app/Cart'
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
        <Stack.Screen
          name='Cart'
          options={{ headerShown: false }}
          component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}