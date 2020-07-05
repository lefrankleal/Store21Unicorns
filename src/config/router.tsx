import { StyleSheet, View } from 'react-native'

import Auth from '../views/auth/auth'
import Cart from '../views/app/Cart'
import Home from '../views/app/Home'
import Icon from './AdicticIcons'
import { NavigationContainer } from '@react-navigation/native'
import Product from '../views/app/Product'
import React from 'react'
import { Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack'
import globals from './globals';

const Stack = createStackNavigator()
export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={({ route, navigation }) => ({
            headerTitle: 'Sneakers!!!',
            headerTitleStyle: homeStyles.headerTitle,
            headerTitleAlign: 'center',
            headerStyle: homeStyles.headerStyle,
          })}
          component={Home} />
        <Stack.Screen
          name='Product'
          options={({ route, navigation }) => ({
            headerTitle: ({ }) => <View style={productStyles.header}>
              <Text style={productStyles.headerTitle}>Sneakers!!!</Text>
              <Text h4 numberOfLines={1} style={productStyles.headerSubTitle}>{route.params.item.name}</Text>
            </View>,
            headerLeft: ({ }) => <View style={productStyles.headerLeft}>
              <Icon onPress={() => navigation.goBack()} size={24} name='arrow-left' />
            </View>,
            headerRight: ({ }) => <View style={productStyles.headerRight}>
              <Icon size={24} name='save' />
              <Icon size={24} name='share' />
            </View>,
            headerTitleAlign: 'center',
            headerStyle: productStyles.headerStyle
          })}
          component={Product} />
        <Stack.Screen
          name='Cart'
          options={{ headerShown: false }}
          component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const homeStyles = StyleSheet.create({
  headerStyle: {
    height: 70,
  },
  headerTitle: {
    fontFamily: 'Muli-ExtraBold',
    fontWeight: 'normal',
    fontSize: 24,
  },
})

const productStyles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width: 60,
    justifyContent: 'space-around',
  },
  headerRight: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 60
  },
  headerStyle: {
    height: 70,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  headerTitle: {
    fontFamily: 'Muli-ExtraBold',
    fontWeight: 'normal',
    fontSize: 24,
  },
  headerSubTitle: {
    color: globals.Colors.font.light
  }
})