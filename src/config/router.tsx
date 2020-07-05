import { StyleSheet, View } from 'react-native'

import Cart from '../views/app/Cart'
import Globals from './globals'
import Icon from './AdicticIcons'
import { NavigationContainer } from '@react-navigation/native'
import Product from '../views/app/Product'
import React from 'react'
import Shop from '../views/app/Shop'
import { Text } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Shop'
          options={({ route, navigation }) => ({
            headerTitle: 'Sneakers!!!',
            headerTitleStyle: shopStyles.headerTitle,
            headerTitleAlign: 'center',
            headerStyle: shopStyles.headerStyle,
          })}
          component={Shop} />
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

const shopStyles = StyleSheet.create({
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
    color: Globals.Colors.font.light
  }
})

export default RootStack