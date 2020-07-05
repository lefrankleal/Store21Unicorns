import { Globals, Icon } from './'
import { StyleSheet, View } from 'react-native'

import Cart from '../views/app/Cart'
import { NavigationContainer } from '@react-navigation/native'
import ProductDetails from '../views/app/ProductDetails'
import React from 'react'
import Shop from '../views/app/Shop'
import { Text } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export const RootStack = () => {
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
          name='ProductDetails'
          options={({ route, navigation }) => ({
            headerTitle: ({ }) => <View style={productDetailsStyles.header}>
              <Text style={productDetailsStyles.headerTitle}>Sneakers!!!</Text>
              <Text h4 numberOfLines={1} style={productDetailsStyles.headerSubTitle}>{route.params.item.name}</Text>
            </View>,
            headerLeft: ({ }) => <View style={productDetailsStyles.headerLeft}>
              <Icon onPress={() => navigation.goBack()} size={24} name='arrow-left' />
            </View>,
            headerRight: ({ }) => <View style={productDetailsStyles.headerRight}>
              <Icon size={24} name='save' />
              <Icon size={24} name='share' />
            </View>,
            headerTitleAlign: 'center',
            headerStyle: productDetailsStyles.headerStyle
          })}
          component={ProductDetails} />
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

const productDetailsStyles = StyleSheet.create({
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
  },
  headerTitle: {
    fontFamily: 'Muli-ExtraBold',
    fontWeight: 'normal',
    fontSize: 24,
  },
  headerSubTitle: {
    color: Globals.Colors.font.light,
    maxWidth: '90%',
  }
})