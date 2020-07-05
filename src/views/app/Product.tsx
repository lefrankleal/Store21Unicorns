import React, { ComponentProps } from 'react'

import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'

interface ProductProps extends ComponentProps {

}

const Product = (props: ProductProps) => {
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