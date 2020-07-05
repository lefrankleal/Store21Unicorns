import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'

const Product = (props) => {
  const route = useRoute()
  console.log(route.params)
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
      <Text>Product</Text>
    </ScrollView>
  )
}

export default Product