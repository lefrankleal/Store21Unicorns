import { ComponentProps } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'

const Cart = (props) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic">
      <Text>Cart</Text>
    </ScrollView>
  )
}

export default Cart